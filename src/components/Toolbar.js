/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Input } from "theme-ui";

import useTimer from "../hooks/useTimer";
import Button from "./Button";

export default function Toolbar() {
  const [{ name, color }, { setName }] = useTimer();
  const onNameChange = (e) => setName(e.target.value);

  return (
    <span
      sx={{
        p: 1,
        display: "flex",
      }}
    >
      <Input
        sx={{ flex: 1, m: 1 }}
        placeholder="Timer"
        value={name}
        onChange={onNameChange}
      />
      <Button type="color" color={color} sx={{ m: 1 }} />
      <Button type="icon" icon="save" sx={{ m: 1 }} />
    </span>
  );
}
