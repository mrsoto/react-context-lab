/**
 * @typedef {string|symbol} ActionType
 * @typedef {string|Error} ActionError
 */
/** 
 * @typedef {{type:ActionType, payload?:P, meta?: M, error?:E}} Action Action type object (see useReducer)
 * @template P
 * @template M
 * @template {ActionError} E
 */
/**
 * @typedef {Pick<Action<P,any,any>,"payload">} PayloadContainer
 * @template P
 */


/**
 * reduceBuilder: create a reducer preserving single responsibility principle
 * 
 * Goals:
 * - Remove control variables (type)
 * - Create strong type reducer
 * - Preserve cyclomatic complexity under control
 * 
 * @template S State type
 * @template P Payload type
 * @template M Action meta type
 * @template {ActionError} E Error type
 */
export const reduceBuilder = () => {
    /* 
     * @type {Map<Action, payload, meta, errorType, React.Reducer<S, Action<P,M,E>>>} 
     */
    //const actionsMap = new Map()
    
    /** @type {Object.<ActionType, React.Reducer<S, Action<P,M,E>>>} */
    const actionsMap = {}

    return {
        /** 
         * @param {ActionType} actionType 
         * @param {React.Reducer<S, Action<P,M,E>>} reducer
        */
        withType(actionType, reducer) {
            // actionsMap.set(actionType, reducer)
            actionsMap[actionType] = reducer
            return this
        },
        build() {
            /**
             * @param {S} state current state
             * @param {Action<P,M,E>} action action to reduce
             * @returns {S} next state
             */
            const reducer = (state, action) => {
                //const aReducer = actionsMap.get(action.type);
                const aReducer=actionsMap[action.type]
                if (process.env.NODE_ENV !== "production" && !aReducer) {
                    throw new Error(`Type not defined for reduction: ${String(action.type)}`)
                }
                return aReducer(state, action)
            }
            return reducer
        }
    }
}

/**
 * Create an action enforcing type structure
 * @param {ActionType} type  see useReducer
 * @param {P} [payload] action payload
 * @param {M} [meta] action meta
 * @param {E} [error] error
 * @template P payload type
 * @template M meta type
 * @template {ActionError} E Error type
 */
export const createAction = (type, payload, meta, error) => {
    return {type, payload, meta, error}
}