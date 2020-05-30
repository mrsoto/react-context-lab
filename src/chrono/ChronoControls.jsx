import React from "react";
import { useChronoContext } from "./ChronoContext";

export const ChronoControls = () => {
  const ctx = useChronoContext();
  return (
    <div className="controls">
      <button disabled={ctx.isPaused()} onClick={ctx.pause}>
        Pause
      </button>
      <button disabled={!ctx.isPaused()} onClick={ctx.resume}>
        Resume
      </button>
    </div>
  );
};
