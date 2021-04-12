/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import composeHooks from "react-hooks-compose";

import useTimer from "../hooks/useTimer";
import TimerListItem from "./TimerListItem";
import BottomSheet from "./BottomSheet";
import TimersButton from "./TimersButton";

function TimerList({ timers, setTimer, color }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const handleItemClick = (timerTitle) => () => {
    setTimer(timerTitle);
    toggleOpen();
  };
  const timersButton = () => (
    <TimersButton isOpen={isOpen} onClick={toggleOpen} color={color} />
  );
  return (
    <div>
      {!isOpen && timersButton()}
      <BottomSheet header={timersButton} isOpen={isOpen} onClose={toggleOpen}>
        {timers.map(({ title, color, seconds }, i) => (
          <TimerListItem
            key={i}
            title={title}
            color={color}
            seconds={seconds}
            onClick={handleItemClick(title)}
          />
        ))}
      </BottomSheet>
    </div>
  );
}

export default composeHooks({ useTimer })(TimerList);
