/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import Icon from "./Icon";

export default function TimersButton({ color, isOpen, onClick }) {
  return (
    <div
      sx={{
        display: ["flex", "none"],
        flexDirection: "column",
        alignItems: "center",
        fontSize: 0,
        textAlign: "center",
        p: 2,
        userSelect: "none",
        cursor: "pointer",
        mb: isOpen ? 0 : 3,
      }}
      onClick={onClick}
    >
      <Icon
        icon="chevronUp"
        // size={32}
        rotate={isOpen ? 2 : 0}
      />
      TIMERS
    </div>
  );
}
