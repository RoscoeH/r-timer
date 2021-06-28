import { useCallback, useEffect, useState } from "react";
import { snapValue, toAngle } from "../core/utils";

import useRelativeMousePosition from "./useRelativeMousePosition";

function calculateRadians(x, y) {
  return Math.PI / 2 + Math.atan2(y, x) + (x < 0 && y < 0 ? 2 * Math.PI : 0);
}

function calculateAngle(x, y, steps) {
  let radians = calculateRadians(x, y);
  radians = steps ? snapValue(radians, (2 * Math.PI) / steps) : radians;
  const angle = toAngle(radians);
  return steps ? Math.round(angle) : angle;
}

export default function useDragAngle(steps, onEnd) {
  const [
    { x: relativeX, y: relativeY },
    positionRef,
  ] = useRelativeMousePosition();
  const [isDragging, setIsDragging] = useState(false);
  const [angle, setAngle] = useState();

  // onEnd callback
  const handleEnd = useCallback(() => onEnd && onEnd(angle), [angle, onEnd]);

  // Set drag handler
  useEffect(() => {
    const onMouseDown = () => setIsDragging(true);
    const onMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        handleEnd();
      }
    };
    const onTouchStart = (event) =>{
      event.preventDefault()
      onMouseDown()
    }
    const onTouchEnd = (event) => {
      event.preventDefault()
      onMouseUp()
    }
    const node = positionRef.current;

    node.addEventListener("mousedown", onMouseDown);
    node.addEventListener("touchstart", onTouchStart)
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchend", onTouchEnd)

    return () => {
      node.removeEventListener("mousedown", onMouseDown);
      node.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [positionRef, isDragging, handleEnd]);

  // Calculate angle
  useEffect(() => {
    let angle = null;

    if (isDragging) {
      const { width, height } = positionRef.current.getBoundingClientRect();
      const x = relativeX - width / 2;
      const y = relativeY - height / 2;
      angle = calculateAngle(x, y, steps);
    }
    setAngle(angle);
  }, [isDragging, relativeX, relativeY, steps, positionRef]);

  return [angle, positionRef];
}
