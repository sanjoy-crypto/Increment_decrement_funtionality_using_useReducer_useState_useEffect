import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [num, setNum] = useState(0)

    useEffect(() => {
        document.title = `Chats(${num})`
    })

    return (

        <div className="main">
            <h1>{num}</h1>
            <button onClick={() => setNum(num + 1)} className="btn">Increment</button>

        </div>

    )
}

export default UseEffect