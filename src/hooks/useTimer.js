// import { useState, useEffect } from "react";
import Observable from "observable-lite";
import { useState, useEffect, useCallback, useMemo } from "react";

const initialState = {
  name: "Initial",
  color: "red",
  seconds: 35,
};

const timer = new Observable(initialState);

const subscribe = ({ path, callback }) => timer.subscribe(path, callback);
const unsubscribe = ({ path, callback }) => timer.unsubscribe(path, callback);
const setValue = (path) => (value) => timer.set(path, value);

export default function useTimer(...subscriptions) {
  const [state, setState] = useState(initialState);
  const setKey = useCallback(
    (key) => (value) => setState({ ...state, [key]: value }),
    [state]
  );

  console.log("subs", subscriptions);

  useEffect(() => {
    const subs = subscriptions.map((path) => ({
      path,
      callback: setKey(path),
    }));
    subs.forEach(subscribe);
    return () => subs.forEach(unsubscribe);
  }, [subscriptions, setKey]);

  const actions = useMemo(
    () =>
      subscriptions.reduce((prev, path) => {
        console.log(prev, path);
        return {
          ...prev,
          [`set${path.charAt(0).toUpperCase()}${path.substring(1)}`]: setValue(
            path
          ),
        };
      }, {}),
    [subscriptions]
  );

  return [state, actions];
}
