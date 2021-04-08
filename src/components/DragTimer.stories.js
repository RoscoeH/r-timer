import React from "react";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";

import DragTimer from "../components/DragTimer";

export default {
  title: "Components/DragTimer",
  component: DragTimer,
  decorators: [
    (Story) => (
      <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
        {Story()}
      </DndProvider>
    ),
  ],
};

const Template = (args) => <DragTimer {...args} />;

export const Default = Template.bind({});
Default.args = { snap: true };

export const NoSnap = Template.bind({});
NoSnap.args = { snap: false };
