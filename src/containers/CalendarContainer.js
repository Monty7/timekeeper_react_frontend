import React, {Component} from 'react'
import InputTimes from '../components/InputTimes'
import TimeTotal from '../components/TimeTotal'
import { connect } from 'react-redux'
import BASEURL from '../baseUrl'
import { checkForUser } from '../actions/login'

//Component Did mount to fetch to the database

class CalendarContainer extends Component{
    componentDidMount() {
       // console.log(this.props)
       // console.log(localStorage.getItem('loggedInUserID'))
        checkForUser()
    }

    // state = {  //should be from the store instead
    //     userId: null,
    //     clockIn: '',
    //     clockOut: '',
    //     name: ''
    // }

    
    renderInputs(){
        let inputs = []
        for(let i = 1; i <= 31; i++ ){
            inputs.push(<InputTimes day={i} key={i}/>)
        }        
        return inputs
    }

    render(){ 
        return(
        <div className="container">
            <TimeTotal />
            {this.renderInputs()}
        </div>
        )
    }
}
//mapStateToProps = 

export default CalendarContainer
//connect(mapStateToProps, mapDispatchToProps)