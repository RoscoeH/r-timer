import React from "react";

import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Icon = Template.bind({});
Icon.args = { type: "icon", icon: "check" };

export const Primary = Template.bind({});
Primary.args = { type: "primary", children: "Start" };

export const Secondary = Template.bind({});
Secondary.args = { type: "secondary", children: "Start" };

export const Color = Template.bind({});
Color.args = { type: "color", color: "purple" };

export const WithIcon = Template.bind({});
WithIcon.args = { type: "primary", children: "Start", icon: "check" };

export const PrimaryWithColor = Template.bind({});
PrimaryWithColor.args = { type: "primary", color: "red", children: "Red" };

export const SecondaryWithColor = Template.bind({});
SecondaryWithColor.args = {
  type: "primary",
  color: "purple",
  children: "Purple",
};
