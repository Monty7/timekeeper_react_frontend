export default function manageTime( state = {}, action){
    switch(action.type){
        case "ADD_TIME":
            return {...state, user: action.payload}  //comes from the login action returned by the fetch
        
        case "UPDATE_TIME":
            return state

        case "DELETE_TIME":
            return state
        
        case "FETCH_USER":
            return state

        default:
            return state
    }
} 