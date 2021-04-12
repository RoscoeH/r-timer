import React, { useState, createContext, useContext } from "react";
import { useCallback } from "react";
import createPersistedState from "use-persisted-state";

import useCountdown from "./useCountdown";

const useTimersState = createPersistedState("timers");

const initialTimers = [];
const initialState = {
  name: null,
  color: "green",
  seconds: null,
};

const TimerContext = createContext();

export function TimerProvider({ children }) {
  const [timers, setTimers] = useTimersState(initialTimers);
  const [name, setName] = useState(initialState.name);
  const [color, setColor] = useState(initialState.color);
  const [seconds, setSeconds] = useState(initialState.seconds);

  const [{ seconds: remaining, running }, { start, stop }] = useCountdown(
    seconds
  );

  const saveTimer = useCallback(() => {
    setTimers([
      ...timers,
      {
        name,
        color,
        seconds,
      },
    ]);
  }, [timers, name, color, seconds, setTimers]);

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
    timers,
    saveTimer,
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
    timers,
    saveTimer,
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
    timers,
    saveTimer,
  };
}
