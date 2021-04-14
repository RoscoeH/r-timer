import { range, vibrate } from "../core/utils";
import {
  BEEP_PER_PULSE,
  PULSE_INTERVAL,
  ALARM_PULSES,
} from "../core/constants";

function clack() {
  const clack = new Audio("clack.ogg");
  clack.play();
}

function playSound(audio, times) {
  if (times <= 0) return;

  let playCount = 0;

  audio.addEventListener("ended", () => {
    playCount++;
    if (playCount < times) {
      audio.play();
      vibrate();
    }
  });
  audio.play();
  vibrate();
}

const beep = new Audio("beep.wav");

export default function useSound() {
  const alarm = () => {
    range(ALARM_PULSES).forEach((i) => {
      if (i === 0) {
        playSound(beep, BEEP_PER_PULSE);
      } else {
        setTimeout(() => playSound(beep, BEEP_PER_PULSE), i * PULSE_INTERVAL);
      }
    });
  };

  return { alarm, clack };
}
