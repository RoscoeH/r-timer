import React, { useState, createContext, useContext } from "react";

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

  const [{ seconds: remaining, running }, { start, stop }] = useCountdown(
    10 * 60
  );

  const value = {
    name,
    setName,
    color,
    setColor,
    seconds: running ? remaining : seconds,
    setSeconds,
    running,
    start,
    stop,
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
    running,
    start,
    stop,
  } = useContext(TimerContext);

  return {
    name,
    setName,
    color,
    setColor,
    seconds,
    setSeconds,
    running,
    start,
    stop,
  };
}
