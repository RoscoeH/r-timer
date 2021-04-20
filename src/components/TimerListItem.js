/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import { toTime } from "../core/utils";
import Button from "./Button";

export default function TimerListItem({
  title = "Title",
  color = "green",
  seconds = 360,
  selected,
  onClick,
  onDelete,
}) {
  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete && onDelete();
  };
  const handleClick = () => onClick && onClick();
  return (
    <div
      sx={{
        bg: selected ? "hover" : "transparent",
        display: "flex",
        alignItems: "center",
        border: "default",
        borderColor: "transparent",
        borderRadius: 4,
        userSelect: "none",
        cursor: "pointer",
        mb: 2,
        p: 2,
        "& > *": {
          m: 2,
        },
        "&:hover": {
          bg: "hover",
        },
        "&:active": {
          borderColor: "text",
        },
      }}
      onClick={handleClick}
    >
      <div
        sx={{ width: 3, height: 3, bg: `accent.${color}`, borderRadius: 7 }}
      />
      <div sx={{ flexGrow: 1 }}>{title}</div>
      <div>{toTime(seconds)}</div>
      <div>
        <Button type="icon" icon="close" onClick={handleDelete} />
      </div>
    </div>
  );
}
