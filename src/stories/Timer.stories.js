import React from "react";

import Timer from "../components/Timer";

export default {
  title: "Components/Timer",
  component: Timer,
  argTypes: {
    angle: {
      control: {
        type: "range",
        min: 0,
        max: 360,
      },
    },
    snap: {
      control: {
        type: "boolean",
      },
    },
  },
};

const Template = (args) => <Timer {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const FirstQuad = Template.bind({});
FirstQuad.args = { angle: 30 };

export const SecondQuad = Template.bind({});
SecondQuad.args = { angle: 155 };

export const ThirdQuad = Template.bind({});
ThirdQuad.args = { angle: 222 };

export const FourthQuad = Template.bind({});
FourthQuad.args = { angle: 333 };

export const NoSnap = Template.bind({});
NoSnap.args = { angle: 32, snap: false };
