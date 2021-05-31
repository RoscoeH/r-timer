/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useEffect, useMemo } from "react";
import useDimensions from "react-use-dimensions";
import composeHooks from "react-hooks-compose";
import { throttle } from "lodash";

import { DEFAULT_TIMER_SIZE } from "../core/constants";
import { angleToSeconds } from "../core/utils";
import useTimer from "../hooks/useTimer";
// import useSound from "../hooks/useSound";
import useDragAngleWithLaps from "../hooks/useDragAngleWithLaps";
import Timer from "./Timer";

const DragTimer = ({
  size = DEFAULT_TIMER_SIZE,
  color = "green",
  setDuration,
  running,
  snap = true,
  debug = false,
}) => {
  const [dimensionsRef, { width }] = useDimensions();
  // const { clack } = useSound();

  const [{ angle, laps }, dragRef] = useDragAngleWithLaps(120, 3);

  const throttledUpdate = useMemo(
    () =>
      throttle(
        (a) => {
          console.log("setting duration", a);
          const newDuration = angleToSeconds(a);
          setDuration(newDuration);
        },
        150,
        { trailing: false }
      ),
    [setDuration]
  );

  useEffect(() => {
    if (!isNaN(angle)) {
      throttledUpdate(angle);
    }
  }, [angle, throttledUpdate]);

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
            {/* <p>{`seconds: ${seconds}`}</p> */}
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
