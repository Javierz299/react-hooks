import React, { useState, useReducer } from 'react';
import Routes from './routes';
import Context from './utils/context'
import * as Reducer from './store/hooks_state/hooks_reducer'
import * as ACTIONS from './store/actions/actions'

//main app 
const App = () => {

  const [stateGlobal, setStateGlobal] = useState(0)

  const [stateContextGlobal, dispatchContextGlobal] = useReducer(Reducer.HooksReducer, Reducer.intialState)

  const incrementGlobalState = () => {
    setStateGlobal(stateGlobal + 1)
  }

  const decrementGlobalState = () => {
    setStateGlobal(stateGlobal - 1)
  }

  const handleContextDispatchTrue = () => {
    //dispatch(ACTIONS.SUCCESS)
    //dispatch(type: "SUCCESS")
    dispatchContextGlobal(ACTIONS.success())
}

const handleContextDispatchFalse = () => {
    dispatchContextGlobal(ACTIONS.failure())
}


    return(
      <div>
        React
        <Context.Provider value={{
          valueGlobalState: stateGlobal,
          addGlobalValue: () => incrementGlobalState(),
          decGlobalValue: () => decrementGlobalState(),

          reducerGlobalState: stateContextGlobal.stateprop2,
          dispatchContextTrue: () => handleContextDispatchTrue(),
          dispatchContextFalse: () => handleContextDispatchFalse(),
        }}>
           <Routes />
        </Context.Provider>
      </div>
    )
}


export default App;
