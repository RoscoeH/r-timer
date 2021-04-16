/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";

import AppBar from "./AppBar";

export default function Scaffold({ children }) {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        alignItems: "center",
      }}
    >
      <div sx={{ height: "100%", width: "100%", maxWidth: 12 }}>
        <AppBar
          title="Timerly"
          onHelp={() =>
            setColorMode(colorMode === "default" ? "dark" : "default")
          }
        />
        <div
          sx={{
            display: "flex",
            flexDirection: ["column", "row"],
            justifyContent: "center",
            alignItems: ["center", "stretch"],
            flex: "1 1 auto",
            px: 3,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
