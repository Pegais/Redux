import React from 'react';

import { useSelector, useDispatch } from "react-redux";
import {changeMyName} from '../actions/index'


function Page() {

    // intial state getting through useSelector
    const nameState = useSelector(state => state.changeName);
    const dispatch = useDispatch();
    return (
        <div className='page'>
            <div>{nameState?'snehal':'Mani'}</div>
            <button onClick={()=>dispatch(changeMyName())}>click to chnge name</button>
        </div>
    )
}

export default Page
