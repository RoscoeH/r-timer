import React from "react";

import { DEFAULT_TIMER_SIZE } from "../core/constants";
import { range, snapValue, toRadians } from "../core/utils";

function renderArc(radius, radians, x, y) {
  return `m${radius} ${radius} v${-radius} A${radius} ${radius} 0 ${
    radians > Math.PI / 2 && radians < (3 * Math.PI) / 2 ? 1 : 0
  } 1 ${x} ${y}`;
}

const Mark = ({ size, angle, big = false }) => {
  const center = size / 2;
  const width = big ? size / 128 : size / 256;
  const height = big ? size / 16 : size / 32;
  return (
    <rect
      x={center - width / 2}
      y="0"
      width={width}
      height={height}
      transform={`rotate(${angle} ${center} ${center})`}
      opacity="0.5"
    />
  );
};

const NUM_MARKS = 60;

const Marks = ({ size }) => {
  return (
    <g>
      {range(NUM_MARKS).map((i) => (
        <Mark key={i} size={size} angle={i * (360 / 60)} big={i % 5 === 0} />
      ))}
    </g>
  );
};

const DEFAULT_OPACITY = 1 / 3;

export default function Timer({
  size = DEFAULT_TIMER_SIZE,
  angle = 0,
  snap = true,
  color = "#21fa90",
}) {
  const radius = size / 2;
  const snappedAngled = snap ? snapValue(angle, 360 / 120) : angle;
  const remainingAngle = snappedAngled % 360;
  const laps = Math.floor(snappedAngled / 360);

  let radians = -Math.PI / 2 + toRadians(remainingAngle);
  // radians = snap ? snapValue(radians, (2 * Math.PI) / 120) : radians;

  const handX = radius + radius * Math.cos(radians);
  const handY = radius + radius * Math.sin(radians);

  return (
    <svg width={size} height={size}>
      <circle cx={radius} cy={radius} r={size / 2} opacity="0.05" />
      {range(laps).map((i) => (
        <circle
          key={i}
          cx={radius}
          cy={radius}
          r={size / 2}
          fill={color}
          opacity={DEFAULT_OPACITY}
        />
      ))}
      <path
        d={renderArc(radius, radians, handX, handY)}
        fill={color}
        opacity={DEFAULT_OPACITY}
      />
      <Marks size={size} />
      <circle cx={radius} cy={radius} r={size / 128} opacity="0.5" />
    </svg>
  );
}
