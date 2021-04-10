/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import useTimer from "../hooks/useTimer";
import Button from "./Button";

export default function Controls() {
  const { seconds, color, running, setSeconds, start, stop } = useTimer();

  function cancel() {
    stop();
    setSeconds(null);
  }

  const visible = seconds !== null;
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        py: 3,
        opacity: visible ? 1 : 0,
      }}
    >
      <Button
        type="secondary"
        icon="cancel"
        color={color}
        sx={{ flex: 1, mr: 2 }}
        onClick={cancel}
      >
        Cancel
      </Button>
      {!running && (
        <Button
          icon="check"
          color={color}
          sx={{ flex: 1, ml: 2 }}
          onClick={start}
        >
          Start
        </Button>
      )}
    </div>
  );
}
