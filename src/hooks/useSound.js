import { range, vibrate } from "../core/utils";
import {
  BEEP_PER_PULSE,
  PULSE_INTERVAL,
  ALARM_PULSES,
} from "../core/constants";
import useSettings from "./useSettings";

function clack() {
  const clack = new Audio("clack.ogg");
  clack.play();
}

function playSound(audio, times, sound, vibration) {
  if (times <= 0) return;

  let playCount = 0;

  audio.addEventListener("ended", () => {
    playCount++;
    if (playCount < times) {
      sound && audio.play();
      vibration && vibrate();
    }
  });
  sound && audio.play();
  vibration && vibrate();
}

const beep = new Audio("beep.wav");

export default function useSound() {
  const [sound, vibration] = useSettings();

  const alarm = () => {
    range(ALARM_PULSES).forEach((i) => {
      if (i === 0) {
        playSound(beep, BEEP_PER_PULSE, sound, vibration);
      } else {
        setTimeout(
          () => playSound(beep, BEEP_PER_PULSE),
          i * PULSE_INTERVAL,
          sound,
          vibration
        );
      }
    });
  };

  return { alarm, clack };
}
