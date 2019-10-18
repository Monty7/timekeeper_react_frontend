import React, {Component} from 'react'
import InputTimes from '../components/InputTimes'
import TimeTotal from '../components/TimeTotal'
import LogoutInput from '../components/LogoutInput'
import { connect } from 'react-redux'
//import {checkForUser} from '../actions/login'

//Component Did mount to fetch to the database

class CalendarContainer extends Component{

    // state = {
    //     total: 0
    // }


    
    
    renderInputs(){
        let inputs = []
        for(let i = 1; i <= 31; i++ ){
            inputs.push(<InputTimes day={i} key={i}/>)
        }        
        return inputs
    }


    render(){ 
        // if(this.props.user){
        //     console.log(this.calcTime(this.props.user))
        // }
      //  
        return(
        <React.Fragment>
            <LogoutInput/>
            <div className="container">
                <TimeTotal/>
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
