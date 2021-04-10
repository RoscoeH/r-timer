/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import { toTime, toFinishTime } from "../core/utils";
import useTimer from "../hooks/useTimer";
import TimeDisplay from "./TimeDisplay";

export default function Times() {
  const [{ seconds, remaining, running }] = useTimer();
  const secs = running ? remaining : seconds;
  const remainingTime = toTime(secs);
  const finishTime = toFinishTime(secs);
  const visible = secs !== null;

  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        opacity: visible ? 1 : 0,
      }}
    >
      <TimeDisplay>{remainingTime}</TimeDisplay>
      <TimeDisplay icon="flag">{finishTime}</TimeDisplay>
    </div>
  );
}
