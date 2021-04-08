import React from "react";

import Button from "../components/Button";

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

export const WithIcon = Template.bind({});
WithIcon.args = { type: "primary", children: "Start", icon: "check" };
