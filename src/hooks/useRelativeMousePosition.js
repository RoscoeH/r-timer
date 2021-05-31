import { useEffect, useRef, useState } from "react";

import useMousePosition from "./useMousePosition";

export default function useRelativeMousePosition() {
  const { x, y } = useMousePosition();
  const ref = useRef();
  const [relativePosition, setRelativePosition] = useState({
    x: null,
    y: null,
  });

  useEffect(() => {
    const { left, top } = ref.current.getBoundingClientRect();
    setRelativePosition({
      x: x - left,
      y: y - top,
    });
  }, [x, y, ref]);

  return [relativePosition, ref];
}
