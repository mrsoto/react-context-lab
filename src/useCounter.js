import { useState, useMemo } from "react";
/**
 * @typedef {{
    increment: () => void;
    incrementBy: (n: number) => void;
    decrement: () => void;
    decrementBy: (n: number) => void;
  }} CounterStateActions 

  @typedef {{ counter: number, actions: CounterStateActions}} CounterState
 */
  
 
/**
 * @type {CounterState}
 */
export const initialState = {
    counter: 0,
    actions: undefined
}

 /**
  * 
  * @param {number} initialValue 
  * @returns {CounterState} context
  */
export function useCounter(initialValue) {
    const [counter, updater] = useState(initialValue);
  
    const actions = useMemo(() => {
        /**
         * 
         * @param {number} n 
         */
        const incrementBy = n => updater(count => count + n);
        /**
         * 
         * @param {number} n 
         */
        const decrementBy = n => incrementBy(-n);
        const decrement = () => decrementBy(1);
        const increment = () => incrementBy(1);
        return {
          decrement,
          increment,
          incrementBy,
          decrementBy
        };
    }, [updater]);
  
    return {counter, actions};
  }
  
