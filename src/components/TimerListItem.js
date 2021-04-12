/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import { toTime } from "../core/utils";

export default function TimerListItem({
  title = "Title",
  color = "green",
  seconds = 360,
}) {
  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        p: 3,
        "& > *": {
          m: 2,
        },
        "&:hover": {
          bg: "hover",
        },
      }}
    >
      <div
        sx={{ width: 3, height: 3, bg: `accent.${color}`, borderRadius: 7 }}
      />
      <div sx={{ flexGrow: 1 }}>{title}</div>
      <div>{toTime(seconds)}</div>
    </div>
  );
}
