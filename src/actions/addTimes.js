import BASEURL from "../baseUrl"

export const addTime = (e, userID) => {
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