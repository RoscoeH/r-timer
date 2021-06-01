/** @jsxImportSource theme-ui */
import { useState } from "react";
import { Styled } from "theme-ui";

import SettingsMenu from "./SettingsMenu";
import Button from "./Button";
import Floater from "react-floater";

function Overlay({ onClick }) {
  return (
    <div
      sx={{
        position: "fixed",
        bg: "rgba(0, 0, 0, 0.05)",
        bottom: 0,
        left: 0,
        top: 0,
        right: 0,
        zIndex: 100,
      }}
      onClick={onClick}
    />
  );
}

export default function AppBar({ title = "AppBar", onHelp }) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const handleSettingsClick = () => setIsSettingsOpen(!isSettingsOpen);
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 2,
        pr: 3,
        pl: 3,
        borderBottom: "default",
      }}
    >
      <Styled.h1 sx={{ flex: "1 1 auto" }}>{title}</Styled.h1>
      {/* <Button type="icon" icon="help" onClick={onHelp} /> */}
      <span className="settingsButton">
        <Button
          type="icon"
          icon="more"
          sx={{ m: 1 }}
          onClick={handleSettingsClick}
        />
      </span>
      <Floater
        open={isSettingsOpen}
        target=".settingsButton"
        component={() => <SettingsMenu />}
        styles={{ wrapper: { cursor: "pointer" } }}
        hideArrow
      ></Floater>
      {isSettingsOpen && <Overlay onClick={handleSettingsClick} />}
    </div>
  );
}
