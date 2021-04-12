import { useEffect, useState, useRef, useCallback } from "react";

export default function useCountdown(initialSeconds) {
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
        console.log("cancelAnimationFrame(zero)", handle, milisecond.current);
        cancelAnimationFrame(handle);
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
      console.log("cancelAnimationFrame(pause)", handle, milisecond.current);
      cancelAnimationFrame(handle);
    };
  }, [running]);

  useEffect(() => {
    if (!running && initialSeconds !== seconds) {
      milisecond.current = initialSeconds * 1000;
      console.log("set milli");
      setSeconds(initialSeconds);
      console.log("set secodns");
    }
  }, [running, seconds, initialSeconds, setSeconds, milisecond]);

  const start = useCallback(
    (seconds) => {
      console.log(">start");
      setRunning(true);
    },
    [setRunning]
  );

  const stop = useCallback(() => {
    console.log(">stop");
    setRunning(false);
  }, [setRunning]);

  useEffect(() => {
    console.log("r", running);
  }, [running]);

  return [
    { seconds, running },
    { start, stop },
  ];
}
