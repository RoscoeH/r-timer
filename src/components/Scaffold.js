/** @jsxImportSource theme-ui */
import useAspectRatio from "../hooks/useAspectRatio";
import AppBar from "./AppBar";

export default function Scaffold({ children }) {
  const aspectRatio = useAspectRatio();
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        alignItems: "center",
      }}
    >
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          maxWidth: 13,
        }}
      >
        <AppBar title="rTimer" />
        <div
          sx={{
            display: "flex",
            flexDirection: aspectRatio < 1 ? "column" : "row",
            justifyContent: "center",
            alignItems: aspectRatio < 1 ? "center" : "stretch",
            flex: "1 1 auto",
            px: 3,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
