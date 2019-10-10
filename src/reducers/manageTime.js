export default function manageTime( state = {}, action){  //reducers updates the state sent from the actions
    switch(action.type){
        case "ADD_TIME":
            return state
        
        case "UPDATE_TIME":
            return state

        case "DELETE_TIME":
            return state
        
        case "FETCH_USER":
            //console.log('user has been fetch!')
           // console.log(state)
            return {...state, name: action.payload}  //makes a copy of state and modify the user value inside the copy. this comes from the login action returned by the fetch
                                //{type: 'FETCH_USER', payload: user}
        default:
            return state
    }

    //reducer updates the store to be pulled as props in components
} 