/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import composeHooks from "react-hooks-compose";

import useTimer from "../hooks/useTimer";
import useAspectRatio from "../hooks/useAspectRatio";
import TimerListItem from "./TimerListItem";
import BottomSheet from "./BottomSheet";
import TimersButton from "./TimersButton";

function TimerList({ color, timers, deleteTimer }) {
  const aspectRatio = useAspectRatio();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const handleItemClick = (id) => () => {
    history.push(`/timer/${id}`);
    toggleOpen();
  };
  const handleItemDelete = (id) => () => deleteTimer(id);

  const timersButton = () => (
    <TimersButton isOpen={isOpen} onClick={toggleOpen} color={color} />
  );

  const selected = "work";

  const timerList = (timers, selected) =>
    timers.map(({ id, title, color, seconds }, i) => (
      <TimerListItem
        key={i}
        title={title}
        color={color}
        seconds={seconds}
        selected={id === selected}
        onClick={handleItemClick(id)}
        onDelete={handleItemDelete(id)}
      />
    ));
  return (
    <div
      sx={{
        order: aspectRatio < 1 ? 0 : -1,
        flex: aspectRatio < 1 ? 0 : 1,
        width: "100%",
        minWidth: 8,
      }}
    >
      {aspectRatio < 1 && (
        <div>
          {timersButton()}
          <BottomSheet
            header={timersButton}
            isOpen={isOpen}
            onClose={toggleOpen}
          >
            {timerList(timers, selected)}
          </BottomSheet>
        </div>
      )}
      {aspectRatio > 1 && (
        <div sx={{ pt: 3, pr: 3 }}>{timerList(timers, selected)}</div>
      )}
    </div>
  );
}

export default composeHooks({ useTimer, useHistory })(TimerList);
