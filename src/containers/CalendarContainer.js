import React, {Component} from 'react'
import InputTimes from '../components/InputTimes'
import TimeTotal from '../components/TimeTotal'
import LogoutInput from '../components/LogoutInput'
import { connect } from 'react-redux'
//import {checkForUser} from '../actions/login'


//Component Did mount to fetch to the database

class CalendarContainer extends Component{

    timeDifferenceInADay = (start, end) => {
        start = start.split(":");
        end = end.split(":");
    
        let startTime = new Date(0, 0, 0, start[0], start[1], 0);
        let endTime = new Date(0, 0, 0, end[0], end[1], 0);
    
        return Math.abs(startTime.getTime() - endTime.getTime()); //seconds
    }

    calcTime = (data) => {
        console.log(data)
        let totalMonthTime = data.user_times.reduce((total, stamp) => {
            //debugger
            return total + this.timeDifferenceInADay(stamp.clock_in.slice(11, 16), stamp.clock_out.slice(11, 16))
        }, 0)
        return this.convertTime(totalMonthTime);
    }
    
    convertTime = (timeSeconds) => {
        let seconds, minutes, hours = 0;
        seconds = (timeSeconds / 1000) % 60;
        minutes = (timeSeconds / (1000*60) % 60);
        hours = Math.floor((timeSeconds / (1000*60*60)) % 24);
     //twelveHours = Math.floor((timeSeconds / (1000*60*60)) % 12);
       return `${hours} HOURS, ${minutes} MINUTES`;
     
    }
    

    
    
    renderInputs(){
        let inputs = []
        for(let i = 1; i <= 31; i++ ){
            inputs.push(<InputTimes day={i} key={i}/>)
        }        
        return inputs
    }



    render(){ 
        if(this.props.user){
            console.log(this.calcTime(this.props.user))
        }
      //  
        return(
        <React.Fragment>
            <LogoutInput/>
            <div className="container">
                <TimeTotal />
                {this.renderInputs()}
            </div>
        </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.user,
})

export default connect(mapStateToProps)(CalendarContainer)
