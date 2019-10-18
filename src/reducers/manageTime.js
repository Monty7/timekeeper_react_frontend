let initialState = {
    user: null
}

export default function manageTime( state = initialState, action){
    console.log(state, action)  //reducers updates the state sent from the actions
    switch(action.type){
        case "ADD_TIME":
            console.log(state)
            return {user: action.payload}
        
        case "UPDATE_TIME":
            return state

        case "DELETE_TIME":
            return {user: action.payload}
        
        case "CHECK_LOGGED_USER":
           // console.log(state)
           // console.log({...state, user: action.payload}) //{type: 'CHECK_LOGGED_USER', payload: {userObj, id: userID}}
            return {user: action.payload}

        case "FETCH_USER":
            //console.log('user has been fetch!')
           // console.log(state)
            return {user: action.payload}  //makes a copy of state and modify the user value inside the copy. this comes from the login action returned by the fetch
                                //{type: 'FETCH_USER', payload: user}

       case "LOGOUT_USER":
           return initialState

        default:
            return state
    }

    //reducer updates the store to be pulled as props in components
} 