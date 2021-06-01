import React from "react";

import SettingsMenu from "./SettingsMenu";

export default {
  title: "Components/SettingsMenu",
  component: SettingsMenu,
};

const Template = (args) => <SettingsMenu {...args} />;

export const Default = Template.bind({});
Default.args = {};
