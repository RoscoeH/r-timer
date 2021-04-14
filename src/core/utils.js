import { SUPPORTS_VIBRATE } from "./constants";

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

export function toFinishTime(seconds) {
  var date = new Date();
  date.setSeconds(date.getSeconds() + seconds);
  const time = date.toTimeString().split(" ")[0];
  return time.substring(0, 5);
}

export function secondsToAngle(seconds) {
  return (seconds / 3600) * 360;
}

export function angleToSeconds(angle) {
  return Math.round((angle / 360) * 3600);
}

export function vibrate() {
  if (SUPPORTS_VIBRATE) {
    navigator.vibrate([0, 200, 50]);
  }
}
