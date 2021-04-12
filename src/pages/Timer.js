/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import Toolbar from "../components/Toolbar";
import Times from "../components/Times";
import DragTimer from "../components/DragTimer";
import Controls from "../components/Controls";
import TimerList from "../components/TimerList";
import { TimerProvider } from "../hooks/useTimer";

const Flex = ({ children }) => (
  <div sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
    {children}
  </div>
);
const Spacer = () => <div sx={{ flex: "1 1 auto" }} />;

export default function TimerPage() {
  return (
    <TimerProvider>
      <Flex>
        <Toolbar />
        <Times />
        <DragTimer />
        <Controls />
        <TimerList />
      </Flex>
    </TimerProvider>
  );
}
