import React, { useState } from 'react'

const UseState = () => {

    const [num, setNum] = useState(0)

    return (

        <div className="main">
            <h1>{num}</h1>
            <button onClick={() => setNum(num + 1)} className="btn">Increment</button>
            <button onClick={() => num > 0 ? setNum(num - 1) : setNum(0)} className="btn">Decrement</button>
        </div>

    )
}

export default UseState
