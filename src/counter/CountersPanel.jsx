import React, { useCallback } from "react";
import { useCounterContext } from "./CountContext";

export const CountersPanel = () => {
  const ctx = useCounterContext();
  const sub1 = ctx.actions.decrement;
  const add1 = ctx.actions.increment;

  // useCallback here is overkill but just showing how to use it
  const sub10 = useCallback(() => ctx.actions.decrementBy(10), [ctx.actions]);
  const add10 = useCallback(() => ctx.actions.incrementBy(10), [ctx.actions]);

  return (
    <section>
      <button onClick={sub10}>-10</button>
      <button onClick={sub1}>-</button>
      <span>{ctx.counter} </span>
      <button onClick={add1}>+</button>
      <button onClick={add10}>+10</button>
    </section>
  );
};
