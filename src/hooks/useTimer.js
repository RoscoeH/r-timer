import Observable from "observable-lite";
import { useState, useEffect, useMemo } from "react";

const initialState = {
  name: "Initial",
  color: "red",
  seconds: null,
};

export const timer = new Observable(initialState);

const subscribe = ({ path, callback }) => timer.subscribe(path, callback);
const unsubscribe = ({ path, callback }) => timer.unsubscribe(path, callback);
const setValue = (path) => (value) => timer.set(path, value);

export default function useTimer(...subscriptions) {
  const subs = useMemo(
    () => (Array.isArray(subscriptions) ? subscriptions : [subscriptions]),
    [subscriptions]
  );
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const setKey = (key) => (value) => {
      console.log(">setKey", key, value);
      setState((prev) => ({ ...prev, [key]: value }));
    };
    const subscriptionMap = subs.map((path) => ({
      path,
      callback: setKey(path),
    }));
    subscriptionMap.forEach(subscribe);
    return () => subscriptionMap.forEach(unsubscribe);
  }, [subs, state, setState]);

  const actions = useMemo(
    () =>
      subs.reduce(
        (prev, path) => ({
          ...prev,
          [`set${path.charAt(0).toUpperCase()}${path.substring(1)}`]: setValue(
            path
          ),
        }),
        {}
      ),
    [subs]
  );

  return [state, actions];
}
