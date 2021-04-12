/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState, useCallback } from "react";

export default function useModal(Component, options = { backdrop: true }) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen(!open), [open, setOpen]);

  const Modal = ({ x, y, ...props }) => (
    <div
      sx={{
        position: "absolute",
        bg: options && options.backdrop ? "backdrop" : "transparent",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onClick={toggle}
    >
      <div sx={{ position: "relative" }}>
        <div sx={{ position: "absolute", left: x, top: y }}>
          <Component {...props} />
        </div>
      </div>
    </div>
  );

  return [Modal, open, toggle];
}
