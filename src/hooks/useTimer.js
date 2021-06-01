import React, { useState, createContext, useContext } from "react";
import { useCallback } from "react";
import { createLocalStorageStateHook } from "use-local-storage-state";
import UrlSafeString from "url-safe-string";
import useSound from "./useSound";
import useCountdown from "./useCountdown";
import { useEffect } from "react";

const tagGenerator = new UrlSafeString();

const toId = (title) => title.trim().toLowerCase();
const mapToId = ({ title, ...timer }) => ({
  ...timer,
  title,
  id: tagGenerator.generate(title),
});

const initialTimers = [
  {
    title: "Work",
    color: "green",
    seconds: 25 * 60,
  },
  {
    title: "Short break",
    color: "blue",
    seconds: 5 * 60,
  },
  {
    title: "Long break",
    color: "darkBlue",
    seconds: 30 * 60,
  },
].map(mapToId);
const initialState = {
  title: "",
  color: "green",
  seconds: 10 * 60,
};

const TimerContext = createContext();
const useStorage = createLocalStorageStateHook("timers", initialTimers);

export function TimerProvider({ id, children }) {
  const { alarm } = useSound();
  const [timers, setTimers] = useStorage();
  const [title, setTitle] = useState(initialState.title);
  const [color, setColor] = useState(initialState.color);
  const [seconds, setSeconds] = useState(initialState.seconds);
  const [duration, setDuration] = useState(null);

  const onEnd = useCallback(() => {
    alarm();
    setSeconds(null);
  }, [alarm, setSeconds]);

  const [{ seconds: remaining, running }, { start, stop }] = useCountdown(
    seconds,
    onEnd
  );

  const saveTimer = useCallback(() => {
    const id = toId(title);
    const currentTimer = timers.find((t) => t.id === id);

    if (currentTimer) {
      // Update timer
      setTimers(
        timers.map((t) => (t.id === id ? { ...t, title, color, seconds } : t))
      );
    } else {
      // Save new timer
      setTimers([
        ...timers,
        {
          id: tagGenerator.generate(title),
          title,
          color,
          seconds,
        },
      ]);
    }
  }, [timers, title, color, seconds, setTimers]);

  const deleteTimer = useCallback(
    (id) => {
      setTimers(timers.filter((t) => t.id !== id));
    },
    [timers, setTimers]
  );

  useEffect(() => {
    const timer = timers.find((t) => t.id === id);
    if (timer) {
      stop();
      setTitle(timer.title);
      setColor(timer.color);
      setSeconds(timer.seconds);
    }
  }, [id, timers, stop, setTitle, setColor, setSeconds]);

  const value = {
    title,
    setTitle,
    color,
    setColor,
    seconds: running ? remaining : seconds,
    setSeconds,
    duration,
    setDuration,
    running,
    start,
    stop,
    timers,
    saveTimer,
    deleteTimer,
  };

  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
}

export default function useTimer() {
  return useContext(TimerContext);
}
