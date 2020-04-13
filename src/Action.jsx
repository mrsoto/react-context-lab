import React, { useMemo } from 'react';
import {Context as CounterContext} from './CountContext'
import { useContext } from 'react'

const Action  = ()=> {
    const ctx = useContext(CounterContext)
    const add10 = useMemo(() => ()=>ctx.actions.incrementBy(10), [ctx.actions.incrementBy])
    const sub10 = useMemo(() => ()=>ctx.actions.decrementBy(10), [ctx.actions.decrementBy])

    return (
    <section>
        <button onClick={sub10}>-10</button>
        <button onClick={ctx.actions.decrement}>-</button>
        <span>{ctx.counter} </span>
        <button onClick={ctx.actions.increment}>+</button>
        <button onClick={add10}>+10</button>
    </section>
    )
}

export default Action