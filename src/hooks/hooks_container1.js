import React, { useState, useEffect } from 'react'

const HooksContainer1 = () => {

    //const stateValue = useState(0)[0]
    //const setValue = useState(0)[1]
    const [stateValue, setValue] = useState(0)
    const [useEffectValue, setUseEffectValue] = useState(null)

    useEffect(() => {
        setTimeout(() => 
            setUseEffectValue("useEffect Worked")
        , 2000);
    },[stateValue])


    const incrementValue = () => {
        setValue(stateValue + 1)
    }

    const decrementValue = () => {
        setValue(stateValue - 1)
    }

    const changeuseEffectValue = () => {
        setUseEffectValue('some string')
    }

    return(
        <div>
            React hooks
            <br />
            <button onClick={() => incrementValue()}>increment local state</button>
            <button onClick={() => decrementValue()}>decrement local state</button>
            <button onClick={() => changeuseEffectValue()}>change useEffect value</button>
            <br />
            <div>
               {useEffectValue
                    ? <p>{useEffectValue}</p>
                    : <p>no value</p>
                   }
                <br />
                <p>local state: {stateValue}</p>
            </div>
        </div>

    )
}

export default HooksContainer1