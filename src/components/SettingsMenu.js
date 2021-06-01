/** @jsxImportSource theme-ui */
import composeHooks from "react-hooks-compose";

import useSettings from "../hooks/useSettings";
import Toggle from "./Toggle";

function SettingsRow({ children, onClick }) {
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 2,
        pl: 3,
        pr: 2,
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

export function SettingsMenu({
  darkMode,
  setDarkMode,
  sound,
  setSound,
  vibration,
  setVibration,
}) {
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleSound = () => setSound(!sound);
  const toggleVibration = () => setVibration(!vibration);
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
      <SettingsRow onClick={toggleDarkMode}>
        <Label>Dark mode</Label>
        <Toggle value={darkMode} />
      </SettingsRow>
      <SettingsRow onClick={toggleSound}>
        <Label>Sounds</Label>
        <Toggle value={sound} />
      </SettingsRow>
      <SettingsRow onClick={toggleVibration}>
        <Label>Vibration</Label>
        <Toggle value={vibration} />
      </SettingsRow>
    </div>
  );
}

export default composeHooks({ useSettings })(SettingsMenu);
