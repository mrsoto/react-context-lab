import React, { useMemo } from 'react';
import { Context as CounterContext } from './CountContext'
import { useContext } from 'react'

const Action = () => {
    const ctx = useContext(CounterContext)
    const sub1 = ctx.actions.decrement
    const add1 = ctx.actions.increment
    const sub10 = useMemo(() => () => ctx.actions.decrementBy(10), [ctx.actions.decrementBy])
    const add10 = useMemo(() => () => ctx.actions.incrementBy(10), [ctx.actions.incrementBy])

    return (
        <section>
            <button onClick={sub10}>-10</button>
            <button onClick={sub1}>-</button>
            <span>{ctx.counter} </span>
            <button onClick={add1}>+</button>
            <button onClick={add10}>+10</button>
        </section>
    )
}

export default Action