import BASEURL from "../baseUrl"
import { createBrowserHistory } from 'history'
//GOAL: Have a user log in
//-Write out a controlled form
//1. Write out our input fields 
//2. Create local state 
//3. Create handlers for input fields and attach them 
//4. Connecct component to store 
//5. Write out an ActionCreator that changes the Redux store's state by receiving a parameter (that is the value from local state), 
//   then fetch to the database with the information and set the redux store's state with the received information
//6. mapDispatchToProps our new Action
//7. Take that action from props and make a new handler for the form/submit button that utilizes the action to change Redux store's state

export const fetchUser = (nameObjFromState, history) => {
    console.log(nameObjFromState)
    return dispatch => {
        fetch(BASEURL+'/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(nameObjFromState)
        })
        .then(resp => resp.json())
        .then(userObj => dispatch({type: 'FETCH_USER', payload: userObj}, history.push('/calendar')))
       
       // .then(userObj => {console.log(userObj.payload.id)
        .then(userObj => localStorage.setItem('loggedInUserID', userObj.payload.id));//goes to the reducer
     // .then(localStorage.user = userObj.id) 
    }
}
