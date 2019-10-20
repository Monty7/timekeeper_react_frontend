import BASEURL from "../baseUrl"

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


