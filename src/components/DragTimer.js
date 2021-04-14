/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useEffect } from "react";
import composeHooks from "react-hooks-compose";

import { DEFAULT_TIMER_SIZE } from "../core/constants";
import { angleToSeconds, secondsToAngle } from "../core/utils";
import useTimer from "../hooks/useTimer";
import useSound from "../hooks/useSound";
import useDragAngle from "../hooks/useDragAngle";
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
  const { clack } = useSound();
  const [
    angle,
    reset,
    drag,
    { laps, quadrant, prevQuadrant, currentAngle },
  ] = useDragAngle(size, { steps: 120, onLap: clack });

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
    <div sx={{ textAlign: "center" }}>
      <div ref={running ? null : drag}>
        <Timer
          size={size}
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
  );
};

export default composeHooks({ useTimer })(DragTimer);
