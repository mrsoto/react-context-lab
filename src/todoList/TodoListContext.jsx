import React from "react";
import { useTodoList, initialContextValue } from "./useTodoList";
import { useContext } from "react";

const Context = React.createContext(initialContextValue);

/**
 * useTodoListContext: expose todoList's public handlers: selectors and mutation functions
 * 
 * All functions exposes by this context are stables
 * 
 * Requires: TodoListProvider should be a parent component
 */
export const useTodoListContext = () => useContext(Context).handlers

/**
 * TodoListProvider: Provides a TodoList context
 * 
 * - Every use produce a new and isolated context instance
 * 
 * - useTodoListContext hock provides context state access
 * 
 * @typedef {import('./useTodoList').Todo} Todo  
 * @param {{
 *    value?: Array<Todo>
 *    children: JSX.Element
 * }} props 
 */
export const TodoListProvider = ({ value, children }) => {
    const state = useTodoList(value)
    return (
        <React.Fragment>
            <Context.Provider value={state}>
                {children}
            </Context.Provider>
        </React.Fragment>
    )
}