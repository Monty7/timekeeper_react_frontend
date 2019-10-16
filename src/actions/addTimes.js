import BASEURL from "../baseUrl"

export const addTime = (userID, clock_in, clock_out, captured_date) => {
    // let captured_date = e.target.parentElement.parentElement.children[0].innerText;
    // let clocked_in = e.target.parentElement.parentElement.children[2].value;
    // let clocked_out = e.target.parentElement.parentElement.children[4].value;
    console.log("User ID before posting times from JS is " + userID)
    return dispatch => {
        fetch(`${BASEURL}/user_times`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"           
            },
            body: JSON.stringify(
                {clock_in: clock_in, 
                clock_out: clock_out, 
                //month_time: totalMonthTime, 
                date_of_times: captured_date, 
            //  month_of_times: monthOfTimes, 
                user_id: userID
            })
        })
        .then((res) => {
            console.log(res)
            return res.json();
        })
        .then((timesObj) => {
            console.log(timesObj)
            if (timesObj.err_message){
                alert(timesObj.err_message)
            } else {
                return dispatch({type: 'ADD_TIME', payload: timesObj})
            // calcTime(data) //Need to add the function for this
            
        }
        })
    }
}