import React from "react";

import Toggle from "./Toggle";

export default {
  title: "Components/Toggle",
  component: Toggle,
};

const Template = (args) => <Toggle {...args} />;

export const True = Template.bind({});
True.args = { value: true };

export const False = Template.bind({});
False.args = { value: false };
