const initialState = false;

const changeName = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE": return !state;
        default:return state
    }
}
export default changeName;