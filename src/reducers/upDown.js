// how to do ------->>> reducers
// increment and decrement

// reducer takes two argument state and action
// intial state should be given to state

const initalState = 0;
const upDown = (state = initalState, action) => {
    switch (action.type) {
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1;
        default: return state;

    }
    
}


export default upDown;