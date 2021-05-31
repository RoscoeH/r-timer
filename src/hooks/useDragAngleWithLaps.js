import { useEffect, useState } from "react";

import usePrevious from "./usePrevious";
import useDragAngle from "./useDragAngle";

const angleToQuadrant = (angle) =>
  angle !== null ? Math.floor(angle / 90) : null;

export default function useDragAngleWithLaps(steps) {
  const [angle, positionRef] = useDragAngle(steps);
  const previousAngle = usePrevious(angle);
  const [laps, setLaps] = useState(null);
  const [totalAngle, setTotalAngle] = useState(laps * angle);

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
    // console.log(
    //   "p",
    //   angleToQuadrant(previousAngle),
    //   "q",
    //   angleToQuadrant(angle),
    //   "l",
    //   laps
    // );
    const previousQuad = angleToQuadrant(previousAngle);
    const quad = angleToQuadrant(angle);

    if (previousQuad === 3 && quad === 0 && laps !== null) {
      setLaps(laps + 1);
    } else if (previousQuad === 0 && quad === 3 && laps > 0) {
      setLaps(laps - 1);
    }
  }, [angle, previousAngle, laps]);

  // Reset laps
  useEffect(() => {
    if (angle === null) {
      setLaps(null);
    }
  }, [angle]);

  // Set total angle
  useEffect(() => {
    const total = angle !== null && laps !== null ? 360 * laps + angle : null;
    setTotalAngle(total);
  }, [angle, laps]);

  return [{ angle: totalAngle, laps }, positionRef];
}