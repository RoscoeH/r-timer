import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import Timer from "./Timer";

export default {
  title: "Pages/Timer",
  component: Timer,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone5",
    },
  },
};

const Template = (args) => <Timer {...args} />;

export const Default = Template.bind({});
