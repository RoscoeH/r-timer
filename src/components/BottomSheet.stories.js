import React from "react";
import BottomSheet from "./BottomSheet";

export default {
  title: "Components/BottomSheet",
  component: BottomSheet,
  decorators: [
    (Story) => (
      <div
        style={{ isolation: "isolate", zIndex: 9999999, position: "relative" }}
      >
        {Story()}
      </div>
    ),
  ],
};

const Template = (args) => <BottomSheet {...args} />;

export const Default = Template.bind({});
Default.args = {};
