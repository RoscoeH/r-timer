/** @jsxImportSource theme-ui */
import useRelativeMousePosition from "./useRelativeMousePosition";

export default {
  title: "Hooks/useRelativeMousePosition",
};

const SIZE = 300;

const TestMousePosition = () => {
  const [{ x, y }, ref] = useRelativeMousePosition();
  return (
    <div>
      <h2>Mouse position:</h2>
      <p>{`x = ${x}`}</p>
      <p>{`y = ${y}`}</p>
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
        <div>{`${SIZE} x ${SIZE}`}</div>
      </div>
    </div>
  );
};

export const Default = () => <TestMousePosition />;
