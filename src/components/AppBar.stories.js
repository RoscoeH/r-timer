import React from "react";
import AppBar from "./AppBar";

export default {
  title: "Components/AppBar",
  component: AppBar,
  argTypes: { setTitle: { action: true } },
};

const Template = (args) => <AppBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
