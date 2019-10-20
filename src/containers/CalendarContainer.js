import React, {Component} from 'react'
import InputTimes from '../components/InputTimes'
import TimeTotal from '../components/TimeTotal'
import LogoutInput from '../components/LogoutInput'
import { connect } from 'react-redux'

//Component Did mount to fetch to the database

class CalendarContainer extends Component{
    
    renderInputs(){
        let inputs = []
        for(let i = 1; i <= 31; i++ ){
            inputs.push(<InputTimes day={i} key={i}/>)
        }        
        return inputs
    }


    render(){ 
 
        return(
        <React.Fragment>
            <LogoutInput/>
            <div className="container">
                <TimeTotal/>
                <div className="calendar">
                {this.renderInputs()}
                </div>
            </div>
        </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.user,
})

export default connect(mapStateToProps)(CalendarContainer)
