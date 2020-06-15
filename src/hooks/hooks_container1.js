import React, { useState, useEffect, useReducer } from 'react'
import * as Reducer from '../store/hooks_state/hooks_reducer'
import * as ACTIONS from '../store/actions/actions'

const HooksContainer1 = () => {

    //const stateValue = useState(0)[0]
    //const setValue = useState(0)[1]
    const [stateValue, setValue] = useState(0)
    const [useEffectValue, setUseEffectValue] = useState(null)

    const [state, dispatch] = useReducer(Reducer.HooksReducer, Reducer.intialState)

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

    const handleDispatchTrue = () => {
        //dispatch(ACTIONS.SUCCESS)
        //dispatch(type: "SUCCESS")
        dispatch(ACTIONS.success())
    }

    const handleDispatchFalse = () => {
        dispatch(ACTIONS.failure())
    }

    return(
        <div>
            React hooks
            <button onClick={() => handleDispatchTrue()}>dispatch true</button>
            <button onClick={() => handleDispatchFalse()}>dispatch false</button>
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
                <br />
                {state.stateprop1
                    ? <p> stateprop1 is true</p>
                    : <p>stateprop1 is false</p>

                }
            </div>
        </div>

    )
}

export default HooksContainer1