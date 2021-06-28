import { useState, useEffect } from "react";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const onTouchMove = (event) => {
    const { clientX, clientY } = event.touches[0];
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", setMousePosition);
    window.addEventListener("touchmove", onTouchMove);
    return () => {
      window.removeEventListener("mousemove", setMousePosition);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return mousePosition;
}
