/** @jsxImportSource theme-ui */
import useDragAngle from "./useDragAngle";

export default {
  title: "Hooks/useDragAngle",
};

const SIZE = 300;

const TestDragAngle = ({ steps }) => {
  const [angle, ref] = useDragAngle(steps);
  return (
    <div>
      <p>
        {angle === null ? "Drag inside the box" : `Angle from centre: ${angle}`}
      </p>
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
