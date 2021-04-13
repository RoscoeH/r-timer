/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import useDimensions from "react-use-dimensions";

import useModal from "../hooks/useModal";
import Button from "./Button";

const MODAL_OFFSET = {
  x: -50,
  y: 40,
};

function OpenColorPicker({ color, onPick }) {
  const { theme } = useThemeUI();
  const colors = Object.keys(theme.colors.accent).filter((c) => c !== "hover");
  return (
    <div
      sx={{
        bg: "background",
        display: "inline-grid",
        p: 1,
        gridTemplateColumns: "1fr 1fr 1fr",
        boxShadow: ({ sizes, colors }) =>
          `0 0 ${sizes[2]}px 0px ${colors.accent.black}`,
        border: "default",
        borderRadius: 5,
      }}
    >
      {colors.map((c) => (
        <Button
          key={c}
          type="color"
          color={c}
          sx={{ m: 1, borderColor: c === color ? "text" : "auto" }}
          onClick={() => onPick && onPick(c)}
        />
      ))}
    </div>
  );
}

export default function ColorPicker({ color, onPick }) {
  const [Modal, open, toggle] = useModal(OpenColorPicker);
  const [ref, { x, y }] = useDimensions();

  const pickColor = (color) => {
    toggle();
    onPick && onPick(color);
  };

  return (
    <span ref={ref} sx={{ display: "flex", alignItems: "center" }}>
      {open && (
        <Modal
          color={color}
          onPick={pickColor}
          x={x + MODAL_OFFSET.x}
          y={y + MODAL_OFFSET.y}
        />
      )}
      <Button
        type="color"
        color={color}
        sx={{ borderColor: open ? "text" : "auto" }}
        onClick={toggle}
      />
    </span>
  );
}
