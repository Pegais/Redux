// single source of truth;
// single store to mannage all action state;

// create store;

import { createStore } from "redux";


//storing my rootreducer in store;
import rootReducer from "./reducers/index";

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;