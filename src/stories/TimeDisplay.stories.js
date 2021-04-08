import React from "react";
import TimeDisplay from "../components/TimeDisplay";
import { toTime } from "../core/utils";

export default {
  title: "Components/TimeDisplay",
  component: TimeDisplay,
};

const Template = (args) => <TimeDisplay {...args} />;

export const TimeRemaining = Template.bind({});
TimeRemaining.args = { icon: "clock", children: toTime(37 * 60 + 23) };

export const FinishTime = Template.bind({});
FinishTime.args = { icon: "flag", children: "16:52" };
