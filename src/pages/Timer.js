/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useParams } from "react-router-dom";

import "./Timer.css";

import Toolbar from "../components/Toolbar";
import Times from "../components/Times";
import DragTimer from "../components/DragTimer";
import Controls from "../components/Controls";
import TimerList from "../components/TimerList";
import { TimerProvider } from "../hooks/useTimer";
import { AspectRatioProvider } from "../hooks/useAspectRatio";
import Scaffold from "../components/Scaffold";

export default function TimerPage() {
  const { id } = useParams();
  return (
    <TimerProvider id={id}>
      <AspectRatioProvider>
        <Scaffold>
          <div
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 2,
              width: "100%",
              height: "100%",
              maxWidth: [9, 10],
            }}
          >
            <Toolbar />
            <Times />
            <DragTimer />
            <Controls />
          </div>
          <TimerList />
        </Scaffold>
      </AspectRatioProvider>
    </TimerProvider>
  );
}
