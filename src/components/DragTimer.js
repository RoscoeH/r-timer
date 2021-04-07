import React, { useEffect, useState } from "react";
import { useDrag } from "react-dnd";

import { DEFAULT_TIMER_SIZE } from "../core/constants";
import { snapValue, toAngle } from "../core/utils";
import Timer from "./Timer";

const DRAG_TYPE = "TIMER";

function calculateRadians(x, y) {
  return x !== null && y !== null
    ? Math.atan2(y, x) + (x < 0 && y < 0 ? 2 * Math.PI : 0)
    : -Math.PI / 2;
}

const MAX_LAPS = 2;
const MAX_ANGLE = 360 * (MAX_LAPS + 1);

export default function DragTimer({ size = DEFAULT_TIMER_SIZE, snap = true }) {
  const [previousQuadrant, setPreviousQuadrant] = useState(null);
  const [laps, setLaps] = useState(0);

  const [{ initialSourceClientOffset, clientOffset }, drag] = useDrag(() => ({
    type: DRAG_TYPE,
    item: {},
    collect: (monitor) => ({
      initialSourceClientOffset: monitor.getInitialSourceClientOffset(),
      clientOffset: monitor.getClientOffset(),
    }),
    end: () => {
      setPreviousQuadrant(null);
      setLaps(0);
    },
  }));

  // Calculate angle
  const radius = size / 2;
  const x =
    initialSourceClientOffset && clientOffset
      ? -radius + clientOffset.x - initialSourceClientOffset.x
      : null;
  const y =
    initialSourceClientOffset && clientOffset
      ? -radius + clientOffset.y - initialSourceClientOffset.y
      : null;
  let radians = Math.PI / 2 + calculateRadians(x, y);
  radians = snap ? snapValue(radians, (2 * Math.PI) / 120) : radians;
  let angle = toAngle(radians);

  const currentQuadrant = Math.floor(angle / 90);

  // Zero angle unless starting in quarant 0 or 1
  angle = currentQuadrant < 2 || previousQuadrant >= 1 ? angle : 0;

  // Save previous quadrant
  useEffect(() => {
    if (angle > 0 && Math.abs(currentQuadrant - previousQuadrant) === 1) {
      setPreviousQuadrant(currentQuadrant);
    }
  }, [currentQuadrant, angle, previousQuadrant]);

  // Increment or decrement laps
  useEffect(() => {
    if (
      laps <= MAX_LAPS &&
      (previousQuadrant === 4 ||
        (currentQuadrant === 0 && previousQuadrant === 3))
    ) {
      setLaps(laps + 1);
      setPreviousQuadrant(0);
    } else if (laps > 0 && currentQuadrant === 3 && previousQuadrant === 0) {
      setLaps(laps - 1);
      setPreviousQuadrant(3);
    }
  }, [currentQuadrant, previousQuadrant, laps]);

  // Recalculate angle using laps
  angle = Math.min(laps * 360 + angle, MAX_ANGLE);
  angle = Math.max(angle, 0);

  return (
    <div ref={drag}>
      <Timer size={size} angle={angle} snap={snap} />
    </div>
  );
}
