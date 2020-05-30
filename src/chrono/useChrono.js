import { useState, useMemo, useEffect } from "react";

/**
  @typedef {{
    pause: () => void;
    resume: () => void;
    getMinutes: () => number;
    getSecs: () => number;
    isPaused: () => boolean;
  }} ClockHandlers 

  @typedef {{ 
    millis: number; 
    offset: number,
    ticks: number
  }} ChronoState

  @typedef {{
   _state: object
   handlers: ClockHandlers
  }} ChronoContext
 
  */

/** @type Readonly<ChronoState> */
const inmutableState = Object.freeze({
  millis: 0,
  ticks: 0,
  offset: null
});

export const initialContextValue = /** @type Readonly<ChronoContext> */ (Object.freeze({
  _state: inmutableState}))

/**
 * Chrono hock, an opaque state with selectors and actions
 * @returns {{
 *  _state: object
 *  handlers: ClockHandlers
 * }} context actions and selectors
 */
export function useChrono() {
  const [chrono, updater] = useState(inmutableState);

  useEffect(tickEffect(chrono, updater), [chrono.offset])

  const selectors = useMemo(() => {
    const getSecs = () => Math.trunc(calcTotalMillis(chrono) / 1000) % 60
    const getMinutes = () => Math.trunc(calcTotalMillis(chrono) / 1000 / 60)
    const isPaused = () => !Boolean(chrono.offset)
    
    return {
      getSecs,
      getMinutes,
      isPaused
    };
  }, [chrono])


  const actions = useMemo(() => {
    const pause = () => updater(state => ({ ...state, offset: null, millis: calcTotalMillis(state) }));
    const resume = () => updater(state => ({ ...state, offset: Date.now() }));

    return {
      pause,
      resume,
    };
  }, [updater]);

  const handlers = useMemo(() => ({ ...selectors, ...actions }), [selectors, actions])

  return { _state: chrono, handlers };
}

/**
 * Update the state every 1s
 * @param {ChronoState} chrono 
 * @param {React.Dispatch<React.SetStateAction<Readonly<ChronoState>>>} updater 
 */
function tickEffect(chrono, updater) {
  return () => {
    if (!chrono.offset) {
      return;
    }
    const intervalID = setInterval(() => {
      updater(state => ({ ...state, ticks: state.ticks + 1 }));
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  };
}

/**
 * @param {ChronoState} chrono 
 */
function calcTotalMillis(chrono) {
  return chrono.millis + (chrono.offset ? (Date.now() - chrono.offset) : 0);
}

