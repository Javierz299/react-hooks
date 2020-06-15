import React, { useState } from 'react'

const HooksContainer1 = () => {

    //const stateValue = useState(0)[0]
    //const setValue = useState(0)[1]
    const [stateValue, setValue] = useState(0)


    const incrementValue = () => {
        setValue(stateValue + 1)
    }

    const decrementValue = () => {
        setValue(stateValue - 1)
    }

    return(
        <div>
            React hooks
            <br />
            <button onClick={() => incrementValue()}>increment local state</button>
            <button onClick={() => decrementValue()}>decrement local state</button>
            <br />
            <div>
                <p>local state: {stateValue}</p>
            </div>
        </div>

    )
}

export default HooksContainer1