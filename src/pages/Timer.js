/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import Toolbar from "../components/Toolbar";
import TimeDisplay from "../components/TimeDisplay";
import DragTimer from "../components/DragTimer";
import Button from "../components/Button";

export default function TimerPage() {
  return (
    <div>
      <Toolbar />
      <div sx={{ display: "flex", justifyContent: "center" }}>
        <TimeDisplay>37:23</TimeDisplay>
        <TimeDisplay icon="flag">16:08</TimeDisplay>
      </div>
      <div sx={{ textAlign: "center" }}>
        <DragTimer />
      </div>
      <div sx={{ display: "flex", justifyContent: "center", py: 3 }}>
        <Button type="secondary" icon="cancel" sx={{ flex: 1, mr: 2 }}>
          Cancel
        </Button>
        <Button icon="check" sx={{ flex: 1, ml: 2 }}>
          Start
        </Button>
      </div>
    </div>
  );
}
