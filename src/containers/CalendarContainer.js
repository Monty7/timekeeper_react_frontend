import React, {Component} from 'react'
import InputTimes from '../components/InputTimes'

class CalendarContainer extends Component{

    render(){
        return(
        <div className="container">
            <InputTimes /> {/* Need to map over*/}
        </div>
        )
    }
}
