/** @jsxRuntime classic */
/** @jsx jsx */
import { useEffect } from "react";
import { jsx, useColorMode } from "theme-ui";

import Toolbar from "../components/Toolbar";
import Times from "../components/Times";
import DragTimer from "../components/DragTimer";
import Controls from "../components/Controls";
import TimerList from "../components/TimerList";
import { TimerProvider } from "../hooks/useTimer";

export default function TimerPage() {
  const [, setColorMode] = useColorMode();

  useEffect(() => {
    setColorMode("dark");
  }, [setColorMode]);

  return (
    <TimerProvider>
      <Toolbar />
      <Times />
      <DragTimer />
      <Controls />
      <TimerList />
    </TimerProvider>
  );
}
