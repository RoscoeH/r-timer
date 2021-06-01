import React from "react";

import DragTimer from "../components/DragTimer";

export default {
  title: "Components/DragTimer",
  component: DragTimer,
};

const Template = (args) => <DragTimer {...args} debug />;

export const Default = Template.bind({});
Default.args = { snap: true };

export const NoSnap = Template.bind({});
NoSnap.args = { snap: false };
