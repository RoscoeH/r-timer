// import { useState, useEffect } from "react";
import Observable from "observable-lite";

const initialState = {
  name: "Timer",
  color: "red",
  seconds: 0,
};

const timer = new Observable(initialState);

export default function useTimer() {
  return timer;
}
