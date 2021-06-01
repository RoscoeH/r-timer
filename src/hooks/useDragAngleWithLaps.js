import { useEffect, useState, useCallback } from "react";

import usePrevious from "./usePrevious";
import useDragAngle from "./useDragAngle";

const angleToQuadrant = (angle) =>
  angle !== null ? Math.floor(angle / 90) : null;

export default function useDragAngleWithLaps(steps, maxLaps, onEnd, onLap) {
  const [laps, setLaps] = useState(null);
  const [totalAngle, setTotalAngle] = useState();

  const handleEnd = useCallback(() => {
    onEnd && onEnd(totalAngle);
  }, [totalAngle, onEnd]);

  const [angle, positionRef] = useDragAngle(steps, handleEnd);
  const previousAngle = usePrevious(angle);

  // Init laps
  useEffect(() => {
    if (laps === null) {
      const quad = angleToQuadrant(angle);
      if (quad === 0) {
        setLaps(0);
      }
    }
  }, [angle, laps]);

  // Set laps
  useEffect(() => {
    const previousQuad = angleToQuadrant(previousAngle);
    const quad = angleToQuadrant(angle);

    if (
      (previousQuad === 3 || previousQuad === 4) &&
      quad === 0 &&
      laps !== null &&
      laps < maxLaps
    ) {
      onLap && onLap(laps);
      setLaps(laps + 1);
    } else if (previousQuad === 0 && (quad === 3 || quad === 4) && laps > 0) {
      onLap && onLap(laps);
      setLaps(laps - 1);
    }
  }, [angle, previousAngle, laps, maxLaps, onLap]);

  // Reset laps
  useEffect(() => {
    if (angle === null) {
      setLaps(null);
    }
  }, [angle]);

  // Set total angle
  useEffect(() => {
    let total = angle !== null && laps !== null ? 360 * laps + angle : null;
    total =
      typeof maxLaps !== "undefined" && angle !== null
        ? Math.min(total, maxLaps * 360)
        : total;
    setTotalAngle(total);
  }, [angle, laps, maxLaps]);

  return [{ angle: totalAngle, laps }, positionRef];
}
