/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import "./Timer.css";

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
        <div
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: ["auto", 2],
            width: ["100%"],
            height: "100%",
          }}
        >
          <Toolbar />
          <Times />
          <DragTimer />
          <Controls />
        </div>
        <div sx={{ order: [0, -1], flex: ["auto", "1"] }}>
          <TimerList />
        </div>
      </Scaffold>
    </TimerProvider>
  );
}
