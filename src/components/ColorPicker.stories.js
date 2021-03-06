import React from "react";
import ColorPicker from "../components/ColorPicker";

export default {
  title: "Components/ColorPicker",
  component: ColorPicker,
  argTypes: { onPick: { action: true } },
};

const Template = (args) => <ColorPicker {...args} />;

export const Default = Template.bind({});

export const Selected = Template.bind({});
Selected.args = { color: "purple" };
