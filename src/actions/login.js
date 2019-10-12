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
    //console.log(nameObjFromState)
    return dispatch => {
        fetch(BASEURL+'/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(nameObjFromState)
        })
        .then(resp => resp.json())
        //.then(userObj => console.log(userObj))
        .then(userObj => dispatch({type: 'FETCH_USER', payload: {userObj, id: localStorage.setItem('loggedInUserID', userObj.id)}}, history.push('/calendar')))
       
       // .then(userObj => {console.log(userObj.payload.id)
      //  .then(userObj => dispatch({type: 'CHECK_LOGGED_USER', payload: localStorage.setItem('loggedInUserID', userObj.payload.id)}));//goes to the reducer
     // .then(localStorage.user = userObj.id) 
    }
}

export const checkForUser = (history) => {
    //console.log(this.state)
    //if redux store has logged in user object
    //if redux store has no logged in user object but localStorage does 
    //if redux store has no loggied in user object and localStorage doesn't either
    let userID = localStorage.getItem('loggedInUserID');
    
    if(userID != 'undefined'){
      // console.log(userID)
        return dispatch => {
            fetch(`${BASEURL}/users/${userID}`)
            .then(res => {
                return res.json();
            })
            .then(userObj => {
              console.log(userObj)
                dispatch({type: 'CHECK_LOGGED_USER', payload: {userObj, id: userID}}, history.push('/calendar'))
               // console.log(data)
               // this.setState({userID: data.id})
                // let user = new User(data)
                
                // user.login();
            })
            .catch(err => {
                console.log(err);
            })
        }
    }else{
        return history.push('/')
    }
}
