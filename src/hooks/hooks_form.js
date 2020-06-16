import React, { useState, useReducer, useContext } from 'react'
import * as ACTIONS from '../store/actions/actions'
import * as UserReducer from '../store/hooks_state/user_input_hooks_reducer'

const HooksForm = () => {
    /*current state, change state*/
 const [valueChange, setValueChange] = useState('')
 const [valueSubmit, setValueSubmit] = useState('')

 const [userState, userDispatch] = useReducer(UserReducer.UserReducer, UserReducer.initialState)

const handleuseStateChange = (e) => {
    setValueChange(e.target.value)
}
 const handleuseStateSubmit = (e) => {
    e.preventDefault()
    setValueSubmit(e.target.useState.value)
 }

 const handleuseReducerChange = (e) => {
     userDispatch(ACTIONS.user_input_change(e.target.value))
 }

 const handleuseReducerSubmit = (e) => {
     e.preventDefault()
    userDispatch(ACTIONS.user_input_submit(e.target.useReducer.value))
 }

    return (
        <div>
            <form onSubmit={handleuseStateSubmit}>
                <label>React useState: </label>
                <input id='useState' type='text' onChange={handleuseStateChange}/>
                <button type='submit' >submit</button>
            </form>
            <form onSubmit={handleuseReducerSubmit}>
                <label>React useState: </label>
                <input id='useReducer' type='text' onChange={handleuseReducerChange}/>
                <button type='submit' >submit</button>
            </form>
            <div>
                <h2>React useState: </h2>
                <p>change: {valueChange} </p>
                <p>submit: {valueSubmit}</p>
            </div>
            <div>
                <h2>React useReducer: </h2>
                <p>change: {userState.user_text_change} </p>
                <p>submit: {userState.user_text_submit} </p>
            </div>

        </div>

    )
}

export default HooksForm