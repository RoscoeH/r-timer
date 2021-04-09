/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import Toolbar from "../components/Toolbar";
import Times from "../components/Times";
import DragTimer from "../components/DragTimer";
import Controls from "../components/Controls";
import { TimerProvider } from "../hooks/useTimer";

export default function TimerPage() {
  return (
    <TimerProvider>
      <Toolbar />
      <Times />
      <DragTimer />
      <Controls />
    </TimerProvider>
  );
}
