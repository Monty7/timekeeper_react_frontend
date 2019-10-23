import BASEURL from "../baseUrl"

export const fetchUser = (nameObjFromState, history) => {
    //thunk allows us to return functions instead of plain objects
    //put async logic inside our action creators
    //allow us to call dispatch inside our actionCreators by automatically passing dispatch to the returned function 
    //the main benefit of thunk is so that our async logic that will ultimately change redux store's state is in our actionCreator files
    //rather than taking up space in the components where the results won't effect local state at all 
    //in other words, async logic that changes local state is fine/belongs in components themselves 
    //async logic that changes redux store's state should go in the action creators
    //it's just separation of responsibility that thunk helps make possible 

    //to be async is to deal with promises. IE fetch requests 
    //console.log(nameObjFromState)
    return dispatch => {
        fetch(BASEURL+'/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(nameObjFromState)
        })
        .then(resp => resp.json())

        .then(userObj => {
            dispatch({type: 'FETCH_USER', payload: userObj})
            localStorage.setItem('loggedInUserID', userObj.id)
            history.push('/calendar')
        })
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
            return dispatch({type: 'CHECK_LOGGED_USER', payload: userObj})
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export const logoutUser = (history) => {
    history.push('/')
    localStorage.clear();
    return dispatch => {
        return dispatch({type: "LOGOUT_USER"})
    }

}


