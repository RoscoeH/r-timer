import { useState, useEffect } from "react";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    window.addEventListener("mousemove", setMousePosition);
    return () => window.removeEventListener("mousemove", setMousePosition);
  }, []);

  return mousePosition;
}
