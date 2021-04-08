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

export function toTime(seconds) {
  let remainingSeconds = seconds;
  const hours = Math.floor(seconds / 3600);
  remainingSeconds %= 3600;

  const minutes = Math.floor(remainingSeconds / 60);
  remainingSeconds %= 60;

  const values = [];

  if (hours) values.push(hours);
  values.push(minutes, remainingSeconds);

  return values.map((n) => n.toString().padStart(2, "0")).join(":");
}

console.log(toTime(33));
console.log(toTime(330));
console.log(toTime(3300));
console.log(toTime(33000));
console.log(toTime(330000));
