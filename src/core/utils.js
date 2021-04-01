export function range(n) {
  return [...Array(n).keys()];
}

export function snapValue(value, resolution) {
  return Math.round(value / resolution) * resolution;
}

export function toAngle(radians) {
  return (radians * 180) / Math.PI;
}

export function toRadians(angle) {
  return (angle * Math.PI) / 180;
}
