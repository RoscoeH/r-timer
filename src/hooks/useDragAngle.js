import { useEffect, useState } from "react";
import { snapValue, toAngle } from "../core/utils";

import useRelativeMousePosition from "./useRelativeMousePosition";

const calculateRadians = (x, y) =>
  Math.PI / 2 + Math.atan2(y, x) + (x < 0 && y < 0 ? 2 * Math.PI : 0);

export default function useDragAngle(steps) {
  const [
    { x: relativeX, y: relativeY },
    positionRef,
  ] = useRelativeMousePosition();
  const [angle, setAngle] = useState();

  useEffect(() => {
    const { width, height } = positionRef.current.getBoundingClientRect();
    const x = relativeX - width / 2;
    const y = relativeY - height / 2;

    let radians = calculateRadians(x, y);
    radians = steps ? snapValue(radians, (2 * Math.PI) / steps) : radians;

    let angle = toAngle(radians);
    angle = steps ? Math.round(angle) : angle;

    setAngle(angle);
  }, [relativeX, relativeY, steps, positionRef]);

  return [angle, positionRef];
}
