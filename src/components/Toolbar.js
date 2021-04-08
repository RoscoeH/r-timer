/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Input } from "theme-ui";

import Button from "./Button";

export default function Toolbar() {
  return (
    <span
      sx={{
        p: 1,
        display: "flex",
        "& > *": {
          m: 1,
        },
      }}
    >
      <Input defaultValue="Timer" sx={{ flex: 1 }} />
      <Button type="color" />
      <Button type="icon" icon="save" />
    </span>
  );
}
