import React, { useReducer } from 'react'

const reducer = (state, action) => {
    if (action.type === 'INCR') {
        state = state + 1
    }
    if (state > 0 && action.type === 'DECR') {
        state = state - 1
    }
    return state
}
const UseReducer = () => {

    const initialData = 0
    const [state, dispatch] = useReducer(reducer, initialData)

    return (

        <div className="main">
            <h1>{state}</h1>
            <button onClick={() => dispatch({ type: 'INCR' })} className="btn">Increment</button>
            <button onClick={() => dispatch({ type: 'DECR' })} className="btn">Decrement</button>
        </div>

    )
}

export default UseReducer