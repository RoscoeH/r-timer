import { useState, useEffect, useMemo } from "react";
import { useDrag } from "react-dnd";

import { toAngle } from "../core/utils";

const DRAG_TYPE = "TIMER";
const MAX_LAPS = 2;
const MAX_ANGLE = 360 * (MAX_LAPS + 1);

const calculateRadians = (x, y) =>
  Math.atan2(y, x) + (x < 0 && y < 0 ? 2 * Math.PI : 0);
const angleToQuadrant = (angle) => (angle ? Math.floor(angle / 90) : null);
const clampAngle = (angle, min, max) => Math.max(Math.min(angle, MAX_ANGLE), 0);
const totalAngle = (angle, laps) => laps * 360 + angle;

export default function useDragAngle(size) {
  const radius = size / 2;
  const [currentAngle, setCurrentAngle] = useState(null);
  const [previousQuadrant, setPreviousQuadrant] = useState(null);
  const [laps, setLaps] = useState(0);

  const [
    { isDragging, initialSourceClientOffset, clientOffset },
    drag,
  ] = useDrag(() => ({
    type: DRAG_TYPE,
    item: () => ({}),
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
      clientOffset: monitor.getClientOffset(),
      initialSourceClientOffset: monitor.getInitialSourceClientOffset(),
    }),
    end: () => {
      setCurrentAngle(null);
      setLaps(0);
    },
  }));

  useEffect(() => {
    if (isDragging) {
      const x = -radius + clientOffset.x - initialSourceClientOffset.x;
      const y = -radius + clientOffset.y - initialSourceClientOffset.y;
      let radians = Math.PI / 2 + calculateRadians(x, y);
      radians = Math.max(radians, 0);
      const newAngle = toAngle(radians);
      const quadrant = angleToQuadrant(newAngle);

      if ((quadrant !== null && quadrant < 2) || previousQuadrant !== null) {
        setCurrentAngle(newAngle);
      }
    }
  }, [
    isDragging,
    initialSourceClientOffset,
    clientOffset,
    radius,
    previousQuadrant,
  ]);

  useEffect(() => {
    const quadrant = angleToQuadrant(currentAngle);

    if (
      laps <= MAX_LAPS &&
      (previousQuadrant === 4 || (quadrant === 0 && previousQuadrant === 3))
    ) {
      setLaps(laps + 1);
      setPreviousQuadrant(0);
    } else if (laps > 0 && quadrant === 3 && previousQuadrant === 0) {
      setLaps(laps - 1);
      setPreviousQuadrant(3);
    }
  }, [currentAngle, previousQuadrant, setPreviousQuadrant, laps, setLaps]);

  useEffect(() => {
    const quadrant = angleToQuadrant(currentAngle);

    if (currentAngle > 0) {
      setPreviousQuadrant(quadrant);
    }
  }, [currentAngle, previousQuadrant]);

  const angle = useMemo(() => {
    console.log("recalcAngle", "a", currentAngle, "l", laps);
    return currentAngle
      ? clampAngle(totalAngle(currentAngle, laps), 0, 360)
      : null;
  }, [currentAngle, laps]);

  return [
    angle,
    drag,
    {
      laps,
      quadrant: angleToQuadrant(currentAngle),
      previousQuadrant,
      currentAngle,
    },
  ];
}
