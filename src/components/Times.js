/** @jsxImportSource theme-ui */
import composeHooks from "react-hooks-compose";

import { toTime, toFinishTime } from "../core/utils";
import useTimer from "../hooks/useTimer";
import TimeDisplay from "./TimeDisplay";

const Times = ({ seconds }) => {
  const remainingTime = toTime(seconds);
  const finishTime = toFinishTime(seconds);
  const visible = seconds !== null;

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
};

export default composeHooks({ useTimer })(Times);
