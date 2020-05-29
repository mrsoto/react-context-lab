import React from 'react'
import { useChronoContext } from './contexts/ChronoContext'

export const ChronoControls = () => {
    const ctx = useChronoContext()
    return (
        <div className="crontrols">
            <button disabled={ctx.isPaused()} onClick={ctx.pause}>Pause</button>
            <button disabled={!ctx.isPaused()} onClick={ctx.resume}>Resume</button>
        </div >
    )
}