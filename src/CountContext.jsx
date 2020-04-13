import React, { useState } from "react";
import { useCounter } from "./useCounter";

/**
 * @type {import("./useCounter").CounterState}
 */
const initialState = {
    counter: 0,
    actions: {
        decrement: undefined,
        increment: undefined,
        incrementBy: undefined,
        decrementBy: undefined
    }
}
export const Context = React.createContext(initialState);

export const CounterProvider = ({ children, initialValue }) => {
    const counter = useCounter(initialValue)
    return (
        <React.Fragment>
            <Context.Provider value={counter}>
                {children}
            </Context.Provider>
        </React.Fragment>
    )
}