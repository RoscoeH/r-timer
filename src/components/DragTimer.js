/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useEffect } from "react";
import useDimensions from "react-use-dimensions";
import composeHooks from "react-hooks-compose";

import { DEFAULT_TIMER_SIZE } from "../core/constants";
import { angleToSeconds, secondsToAngle } from "../core/utils";
import useTimer from "../hooks/useTimer";
// import useSound from "../hooks/useSound";
import useDragAngle from "../hooks/useDragAngle.bak";
import Timer from "./Timer";

const DEBUG = false;

const DragTimer = ({
  size = DEFAULT_TIMER_SIZE,
  color = "green",
  seconds,
  setSeconds,
  running,
  snap = true,
}) => {
  const [dimensionsRef, { width }] = useDimensions();
  // const { clack } = useSound();

  const [
    angle,
    reset,
    dragRef,
    { laps, quadrant, prevQuadrant, currentAngle },
  ] = useDragAngle(width, { steps: 120 });

  useEffect(() => {
    const newSeconds = angleToSeconds(angle);
    if (newSeconds && newSeconds !== seconds) {
      setSeconds(newSeconds);
    }
  }, [angle, seconds, setSeconds]);

  useEffect(() => {
    if (angle === null && seconds === null) {
      reset();
    }
  }, [angle, seconds, reset]);

  return (
    <div
      ref={dimensionsRef}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        flex: "1 1 auto",
      }}
    >
      <div
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          flex: 1,
          maxWidth: 9,
        }}
      >
        <div id="dragref" ref={running ? null : dragRef}>
          <Timer
            size={width}
            color={color}
            angle={angle || secondsToAngle(seconds)}
            snap={snap}
          />
          {DEBUG && (
            <div>
              <p>{`seconds: ${seconds}`}</p>
              <p>{`currentAngle: ${currentAngle}`}</p>
              <p>{`laps: ${laps}`}</p>
              <p>{`prevQuadrant: ${prevQuadrant}`}</p>
              <p>{`quadrant: ${quadrant}`}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default composeHooks({ useTimer })(DragTimer);
