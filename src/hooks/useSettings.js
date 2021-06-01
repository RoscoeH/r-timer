import { useColorMode } from "theme-ui";
import React, { useContext, createContext, useCallback } from "react";
import { createLocalStorageStateHook } from "use-local-storage-state";

const initialSettings = {
  sound: true,
  vibration: true,
};

const SettingsContext = createContext();
const useStorage = createLocalStorageStateHook("settings", initialSettings);

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useStorage();
  const [colorMode, setColorMode] = useColorMode();

  const { sound, vibration } = settings;

  const setDarkMode = useCallback(
    (value) => {
      setColorMode(value ? "dark" : "default");
    },
    [setColorMode]
  );

  const setSound = useCallback(
    (value) => {
      setSettings({
        ...settings,
        sound: value,
      });
    },
    [settings, setSettings]
  );

  const setVibration = useCallback(
    (value) => {
      setSettings({
        ...settings,
        vibration: value,
      });
    },
    [settings, setSettings]
  );

  const value = {
    darkMode: colorMode === "dark",
    setDarkMode,
    sound,
    setSound,
    vibration,
    setVibration,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}

export default function useSettings() {
  return useContext(SettingsContext);
}
