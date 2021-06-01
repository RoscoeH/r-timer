import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { MemoryRouter, Route } from "react-router-dom";

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
      <MemoryRouter initialEntries={["/timer/work"]}>
        <Route path="/timer/:id">{Story()}</Route>
      </MemoryRouter>
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
