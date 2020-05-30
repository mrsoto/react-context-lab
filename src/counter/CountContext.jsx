import React from "react";
import { useCounter, initialState } from "./useCounter";
import { useContext } from "react";

const Context = React.createContext(initialState);

export const useCounterContext = () => useContext(Context)

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