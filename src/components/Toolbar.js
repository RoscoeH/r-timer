/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Input } from "theme-ui";
import composeHooks from "react-hooks-compose";

import useTimer from "../hooks/useTimer";
import Button from "./Button";
import ColorPicker from "./ColorPicker";

const Toolbar = ({ name, color, setName }) => {
  const onNameChange = (e) => setName(e.target.value);

  return (
    <span
      sx={{
        p: 1,
        display: "flex",
      }}
    >
      <Input
        sx={{
          flex: 1,
          m: 1,
          borderColor: `accent.${color}`,
          "&:hover": {
            borderColor: `accent.hover.${color}`,
          },
          "&:active": { borderColor: "dark" },
        }}
        placeholder="Timer"
        value={name}
        onChange={onNameChange}
      />
      <ColorPicker />
      <Button type="icon" color={color} icon="save" sx={{ m: 1 }} />
    </span>
  );
};

export default composeHooks({ useTimer })(Toolbar);
