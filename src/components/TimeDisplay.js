/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import Icon from "./Icon";

export default function TimeDisplay({ icon = "clock", children }) {
  return (
    <div sx={{ display: "inline-flex", alignItems: "center", p: 3 }}>
      {icon && <Icon icon={icon} sx={{ mr: 1 }} />}
      <span sx={{ fontSize: 1, pt: "1px" }}>{children}</span>
    </div>
  );
}
