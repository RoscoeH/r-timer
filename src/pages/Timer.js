/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import Toolbar from "../components/Toolbar";
import Times from "../components/Times";
import DragTimer from "../components/DragTimer";
import Controls from "../components/Controls";

export default function TimerPage() {
  return (
    <div>
      <Toolbar />
      <Times />
      <DragTimer />
      <Controls />
    </div>
  );
}
