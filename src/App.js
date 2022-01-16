import './App.css'
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { incCount, decCount } from './actions/index'
import Page from './components/Page';

function App() {
  const myState = useSelector((state) => state.upDown)

  // dispatch tells redux to to an action and than send it to reducer;
  const dispatch = useDispatch();
  return (
    
      <div className='store'>
        <h2>Using react and redux</h2>
        <button onClick={() => dispatch(decCount())}>-</button>
        <div>{myState}</div>
      <button onClick={() => dispatch(incCount())}>+</button>
      &nbsp; &nbsp; &nbsp;
      <Page />
      </div>
    
  )
}

export default App
