import React from "react";

import Times from "./Times";

export default {
  title: "Components/Times",
  component: Times,
};

const Template = (args) => <Times {...args} />;

const Default = Template.bind({});
Default.args = {};
