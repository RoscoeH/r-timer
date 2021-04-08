/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";

import Button from "./Button";

export default function ColorPicker({ color, onPick }) {
  const { theme } = useThemeUI();
  const colors = Object.keys(theme.colors.accent).filter((c) => c !== "hover");
  return (
    <div sx={{ p: 1, overflowX: "auto", whiteSpace: "nowrap" }}>
      {colors.map((c) => (
        <Button
          type="color"
          color={c}
          sx={{ m: 1, borderColor: c === color ? "dark" : "auto" }}
          onClick={() => onPick && onPick(color)}
        />
      ))}
    </div>
  );
}
