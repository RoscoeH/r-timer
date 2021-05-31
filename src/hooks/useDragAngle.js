import { useRef, useState } from "react";

export default function useDragAngle() {
  const ref = useRef();
  const [angle, setAngle] = useState();

  return [angle, ref];
}
