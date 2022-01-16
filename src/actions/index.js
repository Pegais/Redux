// what to do --------->>>> actions

// increment ;
// defining increment action;

 export const incCount = () => {
    return {
        type:"INCREMENT"
    }
}


// decrement ;
// defining decrement action;

export const decCount = () => {
    return {
        type:"DECREMENT"
    }
}

// change name ;

export const changeMyName = () => {
    return {
        type:"CHANGE"
    }
    
}