/** @jsxImportSource theme-ui */
import Icon from "./Icon";

export default function TimersButton({ color, isOpen, onClick }) {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: 0,
        textAlign: "center",
        userSelect: "none",
        cursor: "pointer",
        py: 2,
      }}
      onClick={onClick}
    >
      <Icon icon="chevronUp" rotate={isOpen ? 2 : 0} />
      TIMERS
    </div>
  );
}
