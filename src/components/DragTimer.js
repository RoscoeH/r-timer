/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useEffect, useMemo, useCallback } from "react";
import useDimensions from "react-use-dimensions";
import composeHooks from "react-hooks-compose";
import { throttle } from "lodash";

import { DEFAULT_TIMER_SIZE } from "../core/constants";
import { angleToSeconds, secondsToAngle } from "../core/utils";
import useTimer from "../hooks/useTimer";
import useSound from "../hooks/useSound";
import useDragAngleWithLaps from "../hooks/useDragAngleWithLaps";
import Timer from "./Timer";

const DragTimer = ({
  size = DEFAULT_TIMER_SIZE,
  color = "green",
  setSeconds,
  seconds,
  running,
  snap = true,
  debug = false,
}) => {
  const [dimensionsRef, { width }] = useDimensions();
  const { clack } = useSound();

  const updateSeconds = useCallback(
    (a) => {
      const newDuration = angleToSeconds(a);
      setSeconds(newDuration);
    },
    [setSeconds]
  );

  const [{ angle, laps }, dragRef] = useDragAngleWithLaps(
    120,
    3,
    updateSeconds,
    clack
  );

  const throttledUpdate = useMemo(
    () => throttle(updateSeconds, 100, { trailing: false }),
    [updateSeconds]
  );

  useEffect(() => {
    if (!running && angle !== null && !isNaN(angle)) {
      throttledUpdate(angle);
    }
  }, [running, angle, throttledUpdate]);

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
        <div id="dragref" ref={dragRef}>
          <Timer
            size={width}
            color={color}
            angle={angle || secondsToAngle(seconds)}
            snap={snap}
          />
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
