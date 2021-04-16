/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import { toTime } from "../core/utils";

export default function TimerListItem({
  title = "Title",
  color = "green",
  seconds = 360,
  selected,
  onClick,
}) {
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
        p: 3,
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
      onClick={onClick}
    >
      <div
        sx={{ width: 3, height: 3, bg: `accent.${color}`, borderRadius: 7 }}
      />
      <div sx={{ flexGrow: 1 }}>{title}</div>
      <div>{toTime(seconds)}</div>
    </div>
  );
}
