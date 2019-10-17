import React, {Component} from 'react'
import AddButton from './buttons/AddButton'
import UpdateButton from './buttons/UpdateButton'
import DeleteButton from './buttons/DeleteButton'
import { connect } from 'react-redux'
import {addTime} from '../actions/addTimes'
import {deleteTime} from '../actions/deleteTimes'
import {updateTime} from '../actions/updateTimes'

//GOAL: Create a user time 
//1. Change local state with user input to collect times
//2. On submit, send times to backend using an actionCreator
//3. With return object of a UserTime, dispatch an action that puts the userTime object in the user's usertimes. 
//Alternatives: send back the entire user obj from the api and reset the user obj in the redux that way 


class InputTimes extends Component{


    state = {
        clockIn: '',
        clockOut: '',
        capturedDate: this.props.day,
        totalTime: null
    }

    // componentDidUpdate(prevProps){
    //     console.log(this.props)
    //     if (this.props.user){
           
    //         let foundDay = this.props.user.user_times.find(ut => parseInt(ut.date_of_times) === this.state.capturedDate)  //compare day from props to day from state
    //         //checking to see if the user object in props has a user_time that matches this component's day 
     
    //         if (foundDay && foundDay.clock_in.slice(11, 16) !== this.state.clockIn) {
    //        console.log("CHANGING")
    //             //calculate the total time here
    //             //let totalTime = logic here
    //         this.setState(prevState => {
    //             return {
    //                 ...prevState, 
    //             clockIn: foundDay.clock_in.slice(11, 16),
    //             clockOut: foundDay.clock_out.slice(11, 16)
    //             // totalTime: foundDay.totalTime
    //             }
    //           }, () => console.log(this.state))
    //         }
    //     }
    // }

    static getDerivedStateFromProps(props, state) {
        
        if (props.user){
           
            let foundDay = props.user.user_times.find(ut => parseInt(ut.date_of_times) === state.capturedDate)  //compare day from props to day from state
            //checking to see if the user object in props has a user_time that matches this component's day 
            if (foundDay && foundDay.clock_in.slice(11, 16) !== state.clockIn) {
                //calculate the total time here
                //let totalTime = logic here
                console.log(foundDay.clock_in.slice(11, 16))
            return {
                ...state, 
                clockIn: foundDay.clock_in.slice(11, 16),
                clockOut: foundDay.clock_out.slice(11, 16)
                // totalTime: foundDay.totalTime
              }
            }
            return null;
        }
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
        this.props.deleteTime(this.props.user.id, this.state.clockIn, this.state.clockOut, this.state.capturedDate)
    }

    handleOnUpdate(event){
        event.preventDefault()
        this.props.updateTime(this.props.user.id, this.state.clockIn, this.state.clockOut, this.state.capturedDate)       
    }

    render(){
    
        return(
            <div className="item">
               
                <form>
                    <span>{this.props.day}</span>
                    <label>Clock In</label>
                    <input type="time" value={this.state.clockIn} name="clockIn" placeholder="Clock In" className="clockIn" onChange={(event) => this.handleOnChange(event)} />
                    <label>Clock Out</label>
                    <input type="time" value={this.state.clockOut} name="clockOut" placeholder="Clock Out" className="clockOut" onChange={(event) => this.handleOnChange(event)} />

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

const mapStateToProps = (state) =>  {
       return {
           user: state.user
        }
    }

export default connect(mapStateToProps, {addTime, deleteTime})(InputTimes)