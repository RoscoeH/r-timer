/** @jsxImportSource theme-ui */
import useMousePosition from "./useMousePosition";

export default {
  title: "Hooks/useMousePosition",
};

const TestMousePosition = () => {
  const { x, y } = useMousePosition();
  return (
    <div>
      <h2>Mouse position:</h2>
      <p>{`x = ${x}`}</p>
      <p>{`y = ${y}`}</p>
    </div>
  );
};

export const Default = () => <TestMousePosition />;
