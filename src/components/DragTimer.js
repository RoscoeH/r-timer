import React from "react";
import { useDrag } from "react-dnd";

import { DEFAULT_TIMER_SIZE } from "../core/constants";
import Timer from "./Timer";

const DRAG_TYPE = "TIMER";

export default function DragTimer({ size = DEFAULT_TIMER_SIZE }) {
  const [{ initialSourceClientOffset, clientOffset }, drag] = useDrag(() => ({
    type: DRAG_TYPE,
    item: {},
    collect: (monitor) => ({
      initialSourceClientOffset: monitor.getInitialSourceClientOffset(),
      clientOffset: monitor.getClientOffset(),
    }),
  }));

  const x =
    initialSourceClientOffset && clientOffset
      ? clientOffset.x - initialSourceClientOffset.x
      : null;
  const y =
    initialSourceClientOffset && clientOffset
      ? clientOffset.y - initialSourceClientOffset.y
      : null;

  return (
    <div ref={drag}>
      <Timer size={size} x={x} y={y} />
    </div>
  );
}
