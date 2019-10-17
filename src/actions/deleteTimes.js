import BASEURL from "../baseUrl"

export const deleteTime = (userID, captured_date, deleted_clock_in, deleted_clock_out) => {
    // let captured_date = e.target.parentElement.parentElement.children[0].innerText;
    // let deleted_clock_in = e.target.parentElement.parentElement.children[2].value;
    // let deleted_clock_out = e.target.parentElement.parentElement.children[4].value;
    return dispatch => {
        fetch(`${BASEURL}/${captured_date}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({user_id: userID, clock_in: deleted_clock_in, clock_out: deleted_clock_out, date_of_times: captured_date})
        })
            .then((res) => {
                return res.json();
            })
            .then((timesObj) => {
                // if(data_from_delete.err_message){
                //     alert(data_from_delete.err_message)
                // }else{
                    
                    // e.target.parentElement.parentElement.children[2].value = "";
                    // e.target.parentElement.parentElement.children[4].value = "";
                    alert("Timestamp has been deleted.");
                    return dispatch({type: 'DELETE_TIME', payload: timesObj})
                    //console.log(data_from_delete)
                    //calcTime(data_from_delete)
                //}   
            })
        }
}