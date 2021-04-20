import { useEffect, useState, useRef, useCallback } from "react";

export default function useCountdown(initialSeconds, onComplete) {
  const milisecond = useRef(initialSeconds * 1000);
  const previous = useRef(milisecond);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running || milisecond.current <= 0) return;

    let effectInitialMs = milisecond.current;
    let effectInitialTimeStamp, handle;

    const step = (timestampMs) => {
      if (effectInitialTimeStamp === undefined)
        effectInitialTimeStamp = timestampMs;
      const elapsed = timestampMs - effectInitialTimeStamp;
      milisecond.current = effectInitialMs - elapsed;

      if (milisecond.current <= 0) {
        setSeconds(0);
        cancelAnimationFrame(handle);
        onComplete && onComplete();
      } else {
        const seconds = Math.floor(milisecond.current / 1000);
        const isUpdate = seconds !== Math.floor(previous.current / 1000);
        previous.current = milisecond.current;

        if (isUpdate) {
          setSeconds(seconds);
        }

        if (running) {
          handle = window.requestAnimationFrame(step);
        }
      }
    };

    handle = window.requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(handle);
    };
  }, [running, onComplete]);

  useEffect(() => {
    if (!running && initialSeconds !== seconds) {
      milisecond.current = initialSeconds * 1000;
      setSeconds(initialSeconds);
    }
  }, [running, seconds, initialSeconds, setSeconds, milisecond]);

  const start = useCallback(() => {
    setRunning(true);
  }, [setRunning]);

  const stop = useCallback(() => {
    setRunning(false);
  }, [setRunning]);

  return [
    { seconds, running },
    { start, stop },
  ];
}
