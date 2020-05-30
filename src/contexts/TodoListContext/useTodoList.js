import { useMemo, useReducer } from "react";
import { reduceBuilder, createAction } from "../../core/reducerBuilder";

/**
  @typedef {{
    id: number
    title: string
    done: boolean
  }} Todo

  @typedef {{
    addTodo: (title: string) => void;
    toggleTodo: (id: number) => void;
    getTodoList: () => Array<Todo>;
  }} TodoListHandlers 

  @typedef {Array<Todo>} TodoListState

  @typedef {{
   _state: object
   handlers: TodoListHandlers
  }} TodoListContext
 
*/

/** @type TodoListState */
const inmutableState = [];

/** @type TodoListContext */
export const initialContextValue = Object.freeze({
  _state: inmutableState,
  handlers: {
    addTodo: null,
    toggleTodo: null,
    getTodoList: null,
  }
})

const ADD_TODO = Symbol("TODO:ADD-TODO")
const TOGGLE_TODO = Symbol("TODO:TOGGLE-TODO")

/**
 * TodoList hock: an opaque state with selectors and actions
 * 
 * @param {TodoListState} initialState
 * @returns {TodoListContext} context actions and selectors
 */
export function useTodoList(initialState = inmutableState) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const selectors = useMemo(() => {
    const getTodoList = () => state

    return {
      getTodoList
    };
  }, [state])


  const actions = useMemo(() => {
    /** @param {string} title */
    const addTodo = (title) => dispatch(createAction(ADD_TODO, {title}))

    /** @param {number} id */
    const toggleTodo = (id) => dispatch(createAction(TOGGLE_TODO, {id}));

    return {
      addTodo,
      toggleTodo,
    };
  }, [dispatch]);

  const handlers = useMemo(() => ({ ...selectors, ...actions }), [selectors, actions])

  return { _state: state, handlers };
}

/**
 * @typedef {import('../../core/reducerBuilder').PayloadContainer<P>} PayloadContainer
 * @template P
 */

/**
 * @param {TodoListState} state 
 * @param {PayloadContainer<Pick<Todo,"title">>} action 
 * @return {TodoListState}
 */
const addTodo = (state, { payload: { title } }) => state.concat({ id: Date.now(), title, done: false })

/**
 * @param {TodoListState} state 
 * @param {PayloadContainer<Pick<Todo,"id">>} action 
 * @return {TodoListState}
 */
const toggleTodo = (state, { payload: { id } }) => state.map(todo => {
  if (todo.id === id) {
    return { ...todo, done: !todo.done }
  }
  return todo
})

const reducer = reduceBuilder()
  .withType(ADD_TODO, addTodo)
  .withType(TOGGLE_TODO, toggleTodo)
  .build()

