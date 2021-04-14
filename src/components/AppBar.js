/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Button from "./Button";

export default function AppBar({ title = "AppBar", onHelp, onSettings }) {
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 2,
        px: 1,
        pl: 3,
        borderBottom: "default",
      }}
    >
      <Styled.h1 sx={{ flex: "1 1 auto" }}>{title}</Styled.h1>
      <Button type="icon" icon="help" onClick={onHelp} />
      <Button type="icon" icon="more" sx={{ m: 1 }} onClick={onSettings} />
    </div>
  );
}
