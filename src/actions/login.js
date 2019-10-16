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
       .then(userObj => {
           console.log(userObj)
           return userObj
       })
        .then(userObj => dispatch({type: 'FETCH_USER', payload: {userObj, id: localStorage.setItem('loggedInUserID', userObj.id)}}, history.push('/calendar')))
       //.then(load user times)
       // .then(userObj => console.log(userObj.payload.id))
      //  .then(userObj => dispatch({type: 'CHECK_LOGGED_USER', payload: localStorage.setItem('loggedInUserID', userObj.payload.id)}));//goes to the reducer
     // .then(localStorage.user = userObj.id) 
    }
    
}

export const checkForUser = (userID, history) => {
    console.log("CHECKING FOR USER")
    return dispatch => {
        fetch(`${BASEURL}/users/${userID}`)
        .then(res => {
            return res.json();
        })
        .then(userObj => {
            history.push('/calendar')
            console.log(history)
            return dispatch({type: 'CHECK_LOGGED_USER', payload: {userObj}})
        })
        .catch(err => {
            console.log(err);
        })
    }
    //console.log(this.state)
    //if redux store has logged in user object
    //if redux store has no logged in user object but localStorage does 
    //if redux store has no loggied in user object and localStorage doesn't either
}

export const logoutUser = () => {
    const currentTime = document.querySelector('#currentTime');
    currentTime.innerText = "";

    const allDateContainers = document.querySelectorAll('.item');
    allDateContainers.forEach((dateContainer) => {
        dateContainer.children[2].value = "";
        dateContainer.children[4].value = "";
    })

    localStorage.clear();

    let welcomeMessage = document.querySelector('#welcomeUser p');
    welcomeMessage.innerText = "";
}

export const addTimes = (e, userID) => {
    e.preventDefault();
    let captured_date = e.target.parentElement.parentElement.children[0].innerText;
    let clocked_in = e.target.parentElement.parentElement.children[2].value;
    let clocked_out = e.target.parentElement.parentElement.children[4].value;
    console.log("User ID before posting times from JS is " + userID)
    
    fetch(`${BASEURL}/user_times`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"           
        },
        body: JSON.stringify(
            {clock_in: clocked_in, 
            clock_out: clocked_out, 
            //month_time: totalMonthTime, 
            date_of_times: captured_date, 
          //  month_of_times: monthOfTimes, 
            user_id: userID
        })
    })
    .then(function(res){
        console.log(res)
        return res.json();
    })
    .then(function(data){
        if (data.err_message){
            alert(data.err_message)
        } else {

           // calcTime(data) //Need to add the function for this
            console.log(data);
      }
    })
}
