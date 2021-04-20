import React from "react";
import TimerListItem from "../components/TimerListItem";

export default {
  title: "Components/TimerListItem",
  component: TimerListItem,
  argTypes: {
    onClick: { action: true },
    onDelete: { action: true },
  },
};

const Template = (args) => <TimerListItem {...args} />;

export const Work = Template.bind({});
Work.args = { title: "Work", color: "green", seconds: 25 * 60 };

export const Selected = Template.bind({});
Selected.args = {
  title: "Selected",
  color: "green",
  seconds: 25 * 60,
  selected: true,
};

export const ShortBreak = Template.bind({});
ShortBreak.args = { title: "Short break", color: "blue", seconds: 5 * 60 };

export const LongBreak = Template.bind({});
LongBreak.args = { title: "Long break", color: "darkBlue", seconds: 30 * 60 };

export const Nap = Template.bind({});
Nap.args = { title: "Nap", color: "purple", seconds: 20 * 60 };

export const LongNap = Template.bind({});
LongNap.args = {
  title: "Long Nap",
  color: "pink",
  seconds: 3600 + 30 * 60,
};

export const Eggs = Template.bind({});
Eggs.args = { title: "Eggs", color: "red", seconds: 3 * 60 };
