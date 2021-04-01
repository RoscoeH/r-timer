import React from "react";
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

export default function DragTimer({ size = DEFAULT_TIMER_SIZE, snap = true }) {
  const [{ initialSourceClientOffset, clientOffset }, drag] = useDrag(() => ({
    type: DRAG_TYPE,
    item: {},
    collect: (monitor) => ({
      initialSourceClientOffset: monitor.getInitialSourceClientOffset(),
      clientOffset: monitor.getClientOffset(),
    }),
  }));

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
  const angle = toAngle(radians);

  console.log(angle);

  return (
    <div ref={drag}>
      <Timer size={size} angle={angle} snap={snap} />
    </div>
  );
}
