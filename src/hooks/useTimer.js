import React, { useState, createContext, useContext } from "react";

import useCountdown from "./useCountdown";

const initialState = {
  name: null,
  color: "green",
  seconds: null,
};

const TimerContext = createContext();

export function TimerProvider({ children }) {
  const [name, setName] = useState(initialState.name);
  const [color, setColor] = useState(initialState.color);
  const [seconds, setSeconds] = useState(initialState.seconds);

  const [{ seconds: remaining, running }, { start, stop }] = useCountdown(
    seconds
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
