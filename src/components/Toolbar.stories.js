import React from "react";
import Toolbar from "../components/Toolbar";

export default {
  title: "Components/Toolbar",
  component: Toolbar,
  argTypes: { setName: { action: true } },
};

const Template = (args) => <Toolbar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Custom = Template.bind({});
Custom.args = { name: "MyTimer", color: "purple" };
