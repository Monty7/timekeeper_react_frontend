import BASEURL from "../baseUrl"

export const updateTime = (userID, captured_date, updated_clock_in, updated_clock_out) => {
    // let captured_date = e.target.parentElement.parentElement.children[0].innerText;
    // let updated_clock_in = e.target.parentElement.parentElement.children[2].value;
    // let updated_clock_out = e.target.parentElement.parentElement.children[4].value;
    return dispatch => {
        fetch(`${BASEURL}/user_times/${captured_date}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"           
            },
            body: JSON.stringify({user_id: userID, clock_in: updated_clock_in, clock_out: updated_clock_out, date_of_times: captured_date})
        })
            .then((res) => {
                return res.json();
            })
            .then((updated_timeObj) => {
                // if(updated_data.err_message){
                //     alert(updated_data.err_message)
                // }else{
                //  calcTime(updated_data)
            // }   
            return dispatch({type: 'UPDATE_TIME', payload: updated_timeObj})
        })
    }
}