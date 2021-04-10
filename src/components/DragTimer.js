/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useEffect } from "react";

import { DEFAULT_TIMER_SIZE } from "../core/constants";
import useTimer from "../hooks/useTimer";
import useDragAngle from "../hooks/useDragAngle";
import Timer from "./Timer";

const DEBUG = false;

const secondsToAngle = (seconds) => (seconds / 3600) * 360;
const angleToSeconds = (angle) => Math.round((angle / 360) * 3600);

export default function DragTimer({ size = DEFAULT_TIMER_SIZE, snap = true }) {
  const { seconds, color, running, setSeconds } = useTimer();
  const [
    angle,
    reset,
    drag,
    { laps, quadrant, prevQuadrant, currentAngle },
  ] = useDragAngle(size);

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
}
