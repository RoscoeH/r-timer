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
  const [{ seconds }, { setSeconds }] = useTimer("seconds");
  const [
    angle,
    drag,
    { laps, quadrant, prevQuadrant, currentAngle },
  ] = useDragAngle(size);

  useEffect(() => {
    const newSeconds = angleToSeconds(angle);
    if (newSeconds && newSeconds !== seconds) {
      setSeconds(newSeconds);
    }
  }, [angle, seconds, setSeconds, laps]);

  return (
    <div sx={{ textAlign: "center" }}>
      <div ref={drag}>
        <Timer
          size={size}
          angle={angle ? angle : secondsToAngle(seconds)}
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
