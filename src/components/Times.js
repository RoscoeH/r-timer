/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import { toTime, toFinishTime } from "../core/utils";
import useTimer from "../hooks/useTimer";
import TimeDisplay from "./TimeDisplay";

export default function Times() {
  const [{ seconds }] = useTimer("seconds");
  const remainingTime = toTime(seconds);
  const finishTime = toFinishTime(seconds);
  return (
    <div sx={{ display: "flex", justifyContent: "center" }}>
      <TimeDisplay>{remainingTime}</TimeDisplay>
      <TimeDisplay icon="flag">{finishTime}</TimeDisplay>
    </div>
  );
}
