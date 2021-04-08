// import { useState, useEffect } from "react";
import Observable from "observable-lite";
import { useState, useEffect, useCallback } from "react";

const initialState = {
  name: "Initial",
  color: "red",
  seconds: 35,
};

const timer = new Observable(initialState);

const subscribe = ({ path, callback }) => timer.subscribe(path, callback);
const unsubscribe = ({ path, callback }) => timer.unsubscribe(path, callback);

export default function useTimer(...subscriptions) {
  const [state, setState] = useState(initialState);
  const setKey = useCallback(
    (key) => (value) => setState({ ...state, [key]: value }),
    [state]
  );

  useEffect(() => {
    const subs = subscriptions.map((path) => ({
      path,
      callback: setKey(path),
    }));
    subs.forEach(subscribe);
    return () => subs.forEach(unsubscribe);
  }, [subscriptions, setKey]);

  return state;
}
