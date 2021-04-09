import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useCallback,
} from "react";

import useCountdown from "./useCountdown";

const initialState = {
  name: "Initial",
  color: "red",
  seconds: 35 * 60,
};

const TimerContext = createContext();

export function TimerProvider({ children }) {
  const [name, setName] = useState(initialState.name);
  const [color, setColor] = useState(initialState.color);
  const [seconds, setSeconds] = useState(initialState.seconds);
  const [remainingSeconds, setRemainingSeconds] = useState(
    initialState.seconds
  );
  const [running, setRunning] = useState(false);

  const value = {
    name,
    setName,
    color,
    setColor,
    seconds,
    setSeconds,
    remainingSeconds,
    setRemainingSeconds,
    running,
    setRunning,
  };

  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
}

export default function useTimer() {
  const {
    name,
    setName,
    color,
    setColor,
    seconds,
    setSeconds,
    remainingSeconds,
    setRemainingSeconds,
    running,
    setRunning,
  } = useContext(TimerContext);

  const [
    { seconds: countdownSeconds, running: countdownRunning },
    { start, stop },
  ] = useCountdown(10 * 60);

  useEffect(() => {
    if (countdownRunning) {
      setRemainingSeconds(countdownSeconds);
    }
  }, [countdownRunning, countdownSeconds, setRemainingSeconds]);

  useEffect(() => {
    if (countdownRunning !== running) {
      console.log(">setRunning", countdownRunning, running);
      setRunning(countdownRunning);
    }
  }, [running, countdownRunning, setRunning]);

  return [
    { name, color, seconds, remainingSeconds, running },
    { setName, setColor, setSeconds, start, stop },
  ];
}
