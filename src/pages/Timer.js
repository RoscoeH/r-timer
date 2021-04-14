/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import Toolbar from "../components/Toolbar";
import Times from "../components/Times";
import DragTimer from "../components/DragTimer";
import Controls from "../components/Controls";
import TimerList from "../components/TimerList";
import { TimerProvider } from "../hooks/useTimer";
import Scaffold from "../components/Scaffold";

export default function TimerPage() {
  return (
    <TimerProvider>
      <Scaffold>
        <Toolbar />
        <Times />
        <DragTimer />
        <Controls />
        <TimerList />
      </Scaffold>
    </TimerProvider>
  );
}
