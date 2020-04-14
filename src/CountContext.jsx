import React from "react";
import { useCounter, initialState } from "./useCounter";

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