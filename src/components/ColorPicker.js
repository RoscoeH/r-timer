/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";

import Button from "./Button";

export default function ColorPicker({ color, onPick }) {
  const { theme } = useThemeUI();
  const colors = Object.keys(theme.colors.accent).filter((c) => c !== "hover");
  return (
    <div
      sx={{
        p: 1,
        display: "inline-grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        boxShadow: ({ sizes, colors }) =>
          `0 0 ${sizes[2]}px 0px ${colors.accent.black}`,
        border: "default",
        borderRadius: 5,
      }}
    >
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
