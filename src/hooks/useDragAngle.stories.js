/** @jsxImportSource theme-ui */
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";

import useDragAngle from "./useDragAngle";

export default {
  title: "Hooks/useDragAngle",
  decorators: [
    (Story) => (
      <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
        {Story()}
      </DndProvider>
    ),
  ],
};

const SIZE = 256;

const TestDragAngle = () => {
  const [angle, _, dragRef] = useDragAngle(SIZE);
  return (
    <div>
      <p>{`Angle from centre: ${angle}`}</p>
      <div
        ref={dragRef}
        sx={{
          width: SIZE,
          height: SIZE,
          border: "1px solid",
          borderColor: "primary",
        }}
      ></div>
    </div>
  );
};

export const Default = () => <TestDragAngle />;
