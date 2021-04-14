/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";

import AppBar from "./AppBar";

export default function Scaffold({ children }) {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <div>
      <AppBar
        title="Timerly"
        onHelp={() =>
          setColorMode(colorMode === "default" ? "dark" : "default")
        }
      />
      <div sx={{ px: 2 }}>{children}</div>
    </div>
  );
}
