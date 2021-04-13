import { range } from "../core/utils";

const BEEP_PER_PULSE = 2;
const BEEP_INTERVAL = 225;
const PULSE_INTERVAL = 1000;

function playBeep() {
  const beep = new Audio("beep.wav");
  beep.play();
}

function playBeeps(number, interval) {
  range(number).forEach((i) => setTimeout(playBeep, i * interval));
}

function alarm() {
  range(3).forEach((i) =>
    setTimeout(
      () => playBeeps(BEEP_PER_PULSE, BEEP_INTERVAL),
      i * PULSE_INTERVAL
    )
  );
}

export default function useAlarm() {
  const play = () => alarm();

  return play;
}
