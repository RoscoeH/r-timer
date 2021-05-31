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
// import useDragAngle from "../hooks/useDragAngle.bak";
import useDragAngleWithLaps from "../hooks/useDragAngleWithLaps";
import Timer from "./Timer";

const DragTimer = ({
  size = DEFAULT_TIMER_SIZE,
  color = "green",
  seconds,
  setSeconds,
  running,
  snap = true,
  debug = false,
}) => {
  const [dimensionsRef, { width }] = useDimensions();
  // const { clack } = useSound();

  // const [
  //   angle,
  //   reset,
  //   dragRef,
  //   { laps, quadrant, prevQuadrant, currentAngle },
  // ] = useDragAngle(width, { steps: 120 });
  const [{ angle, laps }, dragRef] = useDragAngleWithLaps(120, 3);

  // useEffect(() => {
  //   const newSeconds = angleToSeconds(angle);
  //   if (newSeconds && newSeconds !== seconds) {
  //     setSeconds(newSeconds);
  //   }
  // }, [angle, seconds, setSeconds]);

  // useEffect(() => {
  //   if (angle === null && seconds === null) {
  //     reset();
  //   }
  // }, [angle, seconds, reset]);

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
          <Timer size={width} color={color} angle={angle || 0} snap={snap} />
        </div>
        {debug && (
          <div>
            <p>{`seconds: ${seconds}`}</p>
            <p>{`angle: ${angle}`}</p>
            <p>{`laps: ${laps}`}</p>
            {/* <p>{`prevQuadrant: ${prevQuadrant}`}</p> */}
            {/* <p>{`quadrant: ${quadrant}`}</p> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default composeHooks({ useTimer })(DragTimer);
