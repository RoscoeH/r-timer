import React from "react";
import Icon from "../components/Icon";

export default {
  title: "Components/Icon",
  component: Icon,
};

const Template = (args) => <Icon {...args} />;

export const Menu = Template.bind({});
Menu.args = { icon: "menu" };

export const Clock = Template.bind({});
Clock.args = { icon: "clock" };

export const Flag = Template.bind({});
Flag.args = { icon: "flag" };

export const Cancel = Template.bind({});
Cancel.args = { icon: "cancel" };

export const Check = Template.bind({});
Check.args = { icon: "check" };

export const Save = Template.bind({});
Save.args = { icon: "save" };

export const Delete = Template.bind({});
Delete.args = { icon: "delete" };

export const Add = Template.bind({});
Add.args = { icon: "add" };

export const Help = Template.bind({});
Help.args = { icon: "help" };

export const ChevronUp = Template.bind({});
ChevronUp.args = { icon: "chevronUp" };

export const ChevronDown = Template.bind({});
ChevronDown.args = { icon: "chevronDown" };

export const Small = Template.bind({});
Small.args = { size: 8 };

export const Large = Template.bind({});
Large.args = { size: 64 };
