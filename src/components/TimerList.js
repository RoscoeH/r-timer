/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import composeHooks from "react-hooks-compose";

import useTimer from "../hooks/useTimer";
import TimerListItem from "./TimerListItem";

function TimerList({ timers }) {
  return (
    <div>
      {timers.map(({ title, color, seconds }, i) => (
        <TimerListItem key={i} title={title} color={color} seconds={seconds} />
      ))}
    </div>
  );
}

export default composeHooks({ useTimer })(TimerList);
