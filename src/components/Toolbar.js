/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Input } from "theme-ui";

import useTimerHook from "../hooks/useTimer";
import Button from "./Button";

export default function Toolbar({ useTimer = useTimerHook }) {
  const { name, color } = useTimer("name", "color");
  console.log(name, color);
  return (
    <span
      sx={{
        p: 1,
        display: "flex",
      }}
    >
      <Input sx={{ flex: 1, m: 1 }} placeholder="Timer" value={name} />
      <Button type="color" color={color} sx={{ m: 1 }} />
      <Button type="icon" icon="save" sx={{ m: 1 }} />
    </span>
  );
}
