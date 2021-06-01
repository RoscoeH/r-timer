/** @jsxImportSource theme-ui */
import { useColorMode } from "theme-ui";
import composeHooks from "react-hooks-compose";

import Toggle from "./Toggle";

function SettingsRow({ children, onClick }) {
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: 3,
        py: 2,
        userSelect: "none",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

function Label({ children }) {
  return <label sx={{ mr: 4 }}>{children}</label>;
}

export function SettingsMenu({ useColorMode: [colorMode, setColorMode] }) {
  const toggleColorMode = () =>
    setColorMode(colorMode === "default" ? "dark" : "default");

  return (
    <div
      sx={{
        display: "inline-block",
        bg: "background",
        p: 1,
        border: "default",
        borderRadius: 5,
      }}
    >
      <SettingsRow onClick={toggleColorMode}>
        <Label>Dark mode</Label>
        <Toggle value={colorMode === "dark"} />
      </SettingsRow>
      <SettingsRow onClick={toggleColorMode}>
        <Label>Sounds</Label>
        <Toggle value={colorMode === "dark"} />
      </SettingsRow>
      <SettingsRow onClick={toggleColorMode}>
        <Label>Vibration</Label>
        <Toggle value={colorMode === "dark"} />
      </SettingsRow>
    </div>
  );
}

export default composeHooks({ useColorMode })(SettingsMenu);
