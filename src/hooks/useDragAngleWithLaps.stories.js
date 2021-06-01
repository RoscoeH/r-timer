/** @jsxImportSource theme-ui */

import useDragAngleWithLaps from "./useDragAngleWithLaps";

export default {
  title: "Hooks/useDragAngleWithLaps",
};

const SIZE = 300;

const TestDragAngle = ({ steps, maxLaps }) => {
  const [{ angle, laps }, ref] = useDragAngleWithLaps(steps, maxLaps);
  return (
    <div>
      <p>{`Angle from centre: ${angle}`}</p>
      <p>{`Laps: ${laps}`}</p>
      <div
        ref={ref}
        sx={{
          width: SIZE,
          height: SIZE,
          border: "1px solid",
          borderColor: "primary",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div sx={{ width: 1, height: 1, borderRadius: 7, bg: "primary" }} />
      </div>
    </div>
  );
};

const Template = (args) => <TestDragAngle {...args} />;

export const Default = Template.bind({});

export const With120Steps = Template.bind({});
With120Steps.args = { steps: 120 };

export const With12Steps = Template.bind({});
With12Steps.args = { steps: 12 };

export const Max3Laps = Template.bind({});
Max3Laps.args = { maxLaps: 3 };
