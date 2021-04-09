/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import useTimer from "../hooks/useTimer";
import Button from "./Button";

export default function Controls() {
  const [{ seconds }, { setSeconds }] = useTimer("seconds");

  function cancel() {
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
        sx={{ flex: 1, mr: 2 }}
        onClick={cancel}
      >
        Cancel
      </Button>
      <Button icon="check" sx={{ flex: 1, ml: 2 }}>
        Start
      </Button>
    </div>
  );
}
