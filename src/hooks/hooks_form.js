import React, { useState, useReducer, useContext } from 'react'

const HooksForm = () => {
    /*current state, change state*/
 const [valueChange, setValueChange] = useState('')
 const [valueSubmit, setValueSubmit] = useState('')

const handleuseStateChange = (e) => {
    setValueChange(e.target.value)
}
 const handleuseStateSubmit = (e) => {
    e.preventDefault()
    setValueChange(e.target.useState.value)
 }

    return (
        <div>
            <form onSubmit={handleuseStateSubmit}>
                <label>React useState: </label>
                <input id='useState' type='text' onChange={handleuseStateChange}/>
                <button type='submit' >submit</button>
            </form>
            <div>
                <h2>React useState: </h2>
                <p>change: {valueChange} </p>
                <p>submit: {valueSubmit}</p>
            </div>

        </div>

    )
}

export default HooksForm