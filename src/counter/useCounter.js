import { useState, useMemo } from "react";
/**
 * @typedef {{
    increment: () => void;
    incrementBy: (n: number) => void;
    decrement: () => void;
    decrementBy: (n: number) => void;
  }} CounterStateActions 

  @typedef {{ counter: number}} CounterState
 */

export const initialState = /** @type {{counter:number, actions: CounterStateActions}} */ (Object.freeze(
  {
    counter: 0,
  }
));

/**
 *
 * @param {number} initialValue
 * @returns {{counter:number, actions: CounterStateActions}} context
 */
export function useCounter(initialValue) {
  const [counter, updater] = useState(initialValue);

  const actions = useMemo(() => {
    /** @param {number} n  */
    const incrementBy = (n) => updater((count) => count + n);
    /** @param {number} n */
    const decrementBy = (n) => incrementBy(-n);
    const decrement = () => decrementBy(1);
    const increment = () => incrementBy(1);
    return {
      decrement,
      increment,
      incrementBy,
      decrementBy,
    };
  }, [updater]);

  return { counter, actions };
}
