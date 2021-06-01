/** @jsxImportSource theme-ui */
import useTimer from "../hooks/useTimer";
import Button from "./Button";

export default function Controls() {
  const { seconds, setSeconds, color, running, start, stop } = useTimer();

  const handleCancelClick = () => {
    stop();
    setSeconds(null);
  };

  const visible = seconds !== null;
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        py: 2,
        opacity: visible ? 1 : 0,
      }}
    >
      <Button
        type="secondary"
        icon="cancel"
        color={color}
        sx={{ flex: 1, mr: 2 }}
        onClick={handleCancelClick}
      >
        Cancel
      </Button>
      {!running && (
        <Button
          icon="check"
          color={color}
          sx={{ flex: 1, ml: 2 }}
          onClick={start}
        >
          Start
        </Button>
      )}
    </div>
  );
}
