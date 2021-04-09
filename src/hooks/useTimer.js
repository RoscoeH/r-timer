import React, { useState, createContext, useContext } from "react";

const initialState = {
  name: "Initial",
  color: "red",
  seconds: null,
};

const TimerContext = createContext();

export function TimerProvider({ children }) {
  const [name, setName] = useState(initialState.name);
  const [color, setColor] = useState(initialState.color);
  const [seconds, setSeconds] = useState(initialState.seconds);

  const value = { name, setName, color, setColor, seconds, setSeconds };

  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
}

export default function useTimer() {
  const { name, setName, color, setColor, seconds, setSeconds } = useContext(
    TimerContext
  );

  return [
    { name, color, seconds },
    { setName, setColor, setSeconds },
  ];
}
