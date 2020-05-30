import React from "react";
import { useChronoContext } from "./ChronoContext";
import classnames from "classnames";

export const ChronoPanel = () => {
  const chrono = useChronoContext();
  const secs = `${chrono.getSecs()}`.padStart(2, "0");
  return (
    <div
      className={classnames("clock", { "clock--paused": chrono.isPaused() })}
    >
      <span>{chrono.getMinutes()}</span>
      <span className="clock__sep">:</span>
      <span>{secs}</span>
    </div>
  );
};
