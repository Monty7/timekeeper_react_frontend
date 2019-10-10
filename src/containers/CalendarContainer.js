import React, {Component} from 'react'
import InputTimes from '../components/InputTimes'
import { connect } from 'react-redux'
import BASEURL from '../baseUrl'

//Component Did mount to fetch to the database

class CalendarContainer extends Component{
    componentWillMount() {
        this.props.fetchUsers()
    }
    renderInputs(){
        let inputs = []
        for(let i = 1; i <= 31; i++ ){
            inputs.push(<InputTimes day={i}/>)
        }        
        return inputs
    }

    render(){ 
        return(
        <div className="container">
            {this.renderInputs()}
        </div>
        )
    }
}
//mapStateToProps = 

export default CalendarContainer
//connect(mapStateToProps, mapDispatchToProps)