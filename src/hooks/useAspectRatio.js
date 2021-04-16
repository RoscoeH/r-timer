import React, { useState, useContext, createContext } from "react";
import { useEffect } from "react";
import useDimensions from "react-use-dimensions";

const AspectRatioContext = createContext();

export function AspectRatioProvider({ children }) {
  const [aspectRatio, setAspectRatio] = useState();
  const [dimensionsRef, { width, height }] = useDimensions();

  useEffect(() => {
    setAspectRatio(width / height);
  }, [width, height]);

  return (
    <div style={{ height: "100%" }} ref={dimensionsRef}>
      <AspectRatioContext.Provider value={aspectRatio}>
        {children}
      </AspectRatioContext.Provider>
    </div>
  );
}

export default function useAspectRatio() {
  return useContext(AspectRatioContext);
}
