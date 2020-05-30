import React, { useCallback, useState } from 'react'
import { useTodoListContext } from './contexts/TodoListContext'
import classNames from 'classnames'

/**
 * @typedef {import('./contexts/TodoListContext').Todo} Todo
 */

/**
 * This component use a context exposing selectors and mutation functions
 */
export const TodoList = () => {
    const { addTodo, getTodoList } = useTodoListContext()
    const [newTodo, newTodoSetter] = useState("")

    const onSubmit = useCallback(
        /** @param {React.FormEvent} e */
        e => {
            e.preventDefault()
            addTodo(newTodo)
            newTodoSetter("")
        }, [addTodo, newTodo]
    )
    const newTodoOnChangeHandler = useCallback(e => newTodoSetter(e.target.value), [])

    return (
        <section className="todo-list">
            <header><p>Todo list</p></header>
            <form onSubmit={onSubmit}>
                <fieldset>
                    <TodoDoListItems todoList={getTodoList()} />
                    <label>New todo:
                        <input id="new-todo" value={newTodo} onChange={newTodoOnChangeHandler} required placeholder="What todo?" width="30" />
                    </label>
                    <button type="submit">ADD</button>
                </fieldset>
            </form>
        </section>
    )
}

// Very huge list !
let TodoDoListItems = React.memo(
    /** @param {{todoList: Array<Todo>}} props */
    ({ todoList }) => {
        return (
            <ul>
                {todoList.map(todo => <TodoItem todo={todo} key={todo.id} />)}
            </ul>
        )
    }
)

/** @param {{todo: Todo}} props */
const TodoItem = ({ todo }) => {
    const { toggleTodo } = useTodoListContext()

    return (
        <li key={todo.id} className={classNames("todo", { "todo--done": todo.done })}>
            <input type="checkbox" checked={todo.done} onChange={() => toggleTodo(todo.id)} />
            {todo.title}
        </li>
    )
}
