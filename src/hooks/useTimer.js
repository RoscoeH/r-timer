// import { useState, useEffect } from "react";
import Observable from "observable-lite";
import { useState, useEffect, useCallback, useMemo } from "react";

const initialState = {
  name: "Initial",
  color: "red",
  seconds: 35 * 60,
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
  const setKey = useCallback(
    (key) => (value) => setState({ ...state, [key]: value }),
    [state]
  );

  useEffect(() => {
    const subscriptionMap = subs.map((path) => ({
      path,
      callback: setKey(path),
    }));
    subscriptionMap.forEach(subscribe);
    return () => subscriptionMap.forEach(unsubscribe);
  }, [subs, setKey]);

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
