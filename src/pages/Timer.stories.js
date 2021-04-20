import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";

import Timer from "./Timer";

export default {
  title: "Pages/Timer",
  component: Timer,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone5",
    },
  },
  decorators: [
    (Story) => (
      <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
        {Story()}
      </DndProvider>
    ),
  ],
};

const Template = (args) => <Timer {...args} />;

export const Mobile = Template.bind({});

export const Tablet = Template.bind({});
Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};
