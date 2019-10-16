import React, {Component} from 'react'
import AddButton from './buttons/AddButton'
import UpdateButton from './buttons/UpdateButton'
import DeleteButton from './buttons/DeleteButton'
import { connect } from 'react-redux'
import {addTime} from '../actions/addTimes'


//GOAL: Create a user time 
//1. Change local state with user input to collect times
//2. On submit, send times to backend using an actionCreator
//3. With return object of a UserTime, dispatch an action that puts the userTime object in the user's usertimes. 
//Alternatives: send back the entire user obj from the api and reset the user obj in the redux that way 


class InputTimes extends Component{


    state = {
        clockIn: '',
        clockOut: '',
        capturedDate: this.props.day
    }

    handleOnChange(event){
        this.setState({ 
            [event.target.name]: event.target.value,
        }, () => console.log(this.state))
    }

    handleOnAdd(event){
        event.preventDefault()
        this.props.addTime(this.props.user.id, this.state.clockIn, this.state.clockOut, this.state.capturedDate)
    }

    handleOnDelete(event){
        event.preventDefault()
    }

    handleOnUpdate(event){
        event.preventDefault()
    }

    render(){
        return(
            <div className="item">
               
                <form>
                    <span>{this.props.day}</span>
                    <label>Clock In</label>
                    <input type="time" name="clockIn" placeholder="Clock In" className="clockIn" onChange={(event) => this.handleOnChange(event)} />
                    <label>Clock Out</label>
                    <input type="time" name="clockOut" placeholder="Clock Out" className="clockOut" onChange={(event) => this.handleOnChange(event)} />

                    <div>
                        <AddButton addTimes={(event) => this.handleOnAdd(event)} />
                        <UpdateButton updateTimes={this.handleOnUpdate}/>
                        <DeleteButton deleteTimes={this.handleOnDelete}/>
                    </div>
                </form>
           </div>
        )
    }   
}

const mapStateToProps = (state) =>  console.log(state)(
   
       {user: state.user}
)

export default connect(mapStateToProps, {addTime})(InputTimes)