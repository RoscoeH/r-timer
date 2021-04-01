import React from "react";

import Timer from "../components/Timer";

export default {
  title: "Components/Timer",
  component: Timer,
  argTypes: {
    x: {
      control: {
        type: "range",
        min: 0,
        max: 256,
      },
    },
    y: {
      control: {
        type: "range",
        min: 0,
        max: 256,
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
FirstQuad.args = { x: 200, y: 30 };

export const SecondQuad = Template.bind({});
SecondQuad.args = { x: 200, y: 200 };

export const ThirdQuad = Template.bind({});
ThirdQuad.args = { x: 30, y: 200 };

export const FourthQuad = Template.bind({});
FourthQuad.args = { x: 30, y: 30 };

export const NoSnap = Template.bind({});
NoSnap.args = { x: 200, y: 30, snap: false };
