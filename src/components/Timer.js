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

export default function Timer({
  size = DEFAULT_TIMER_SIZE,
  angle,
  snap = true,
  color = "#21fa90",
}) {
  const radius = size / 2;
  const laps = Math.floor(angle / 360);
  const remainingAngle = angle % 360;

  let radians = -Math.PI / 2 + toRadians(remainingAngle);
  radians = snap ? snapValue(radians, (2 * Math.PI) / 120) : radians;

  const handX = radius + radius * Math.cos(radians);
  const handY = radius + radius * Math.sin(radians);

  return (
    <svg width={size} height={size}>
      <circle cx={radius} cy={radius} r={size / 2} opacity="0.05" />
      <Marks size={size} />
      {range(laps).map((i) => (
        <circle
          cx={radius}
          cy={radius}
          r={size / 2}
          fill={color}
          opacity="0.33"
        />
      ))}
      <path
        d={renderArc(radius, radians, handX, handY)}
        fill={color}
        opacity="0.33"
      />
      <circle cx={radius} cy={radius} r={size / 128} opacity="0.5" />
    </svg>
  );
}
