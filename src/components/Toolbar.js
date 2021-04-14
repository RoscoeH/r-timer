/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Input } from "theme-ui";
import composeHooks from "react-hooks-compose";

import useTimer from "../hooks/useTimer";
import Button from "./Button";
import ColorPicker from "./ColorPicker";

const Toolbar = ({ title, setTitle, color, setColor, timers, saveTimer }) => {
  const onTitleChange = (e) => setTitle(e.target.value);
  return (
    <span
      sx={{
        py: 1,
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
          "&:active": { borderColor: "text" },
        }}
        placeholder="Timer"
        value={title}
        onChange={onTitleChange}
      />
      <ColorPicker color={color} onPick={setColor} />
      <Button
        type="icon"
        color={color}
        icon="save"
        sx={{ m: 1 }}
        onClick={saveTimer}
      />
    </span>
  );
};

export default composeHooks({ useTimer })(Toolbar);
