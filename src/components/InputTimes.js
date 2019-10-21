import React, {Component} from 'react'
import AddButton from './buttons/AddButton'
import UpdateButton from './buttons/UpdateButton'
import DeleteButton from './buttons/DeleteButton'
import { connect } from 'react-redux'
import {addTime} from '../actions/addTimes'
import {deleteTime} from '../actions/deleteTimes'
import {updateTime} from '../actions/updateTimes'

class InputTimes extends Component{

    state = {
        clockIn: '',
        clockOut: '',
        capturedDate: this.props.day
    }

    componentDidMount(){
        
        this.fillInTimes()
            //handling for the case when a user logs in, and then is directed to the calendar 
            //AND handling for when a user is already "logged in" but it's gonna take a sec for the fetch req to put user in the store
    }

    componentDidUpdate(prevProps){

        if (prevProps.user !== this.props.user){
            
            //because you're always changing your entire user object when you change your times, the deep equals of the prev user onbj
            //and the new user obj are going to be different 
            //so this is saying if the user obj has changed, then re-fill in this user 
            //if the user object hasn't changed, then that means only local state has changed, and we want to preserve that new value
            this.fillInTimes()

        }
    }
    //handling for the case when a user is already logged in based on checkForUser in localStorage etc, and they go to calendar right away 

    findDay = () => {
        if (this.props.user){
           //. debugger
            let foundDayTime = this.props.user.user_times.find(ut => parseInt(ut.date_of_times) === this.state.capturedDate)  //compare day from props to day from state
        //  debugger
            //checking to see if the user object in props has a user_time that matches this component's day 
            if (foundDayTime && foundDayTime.clock_in.slice(11, 16) !== this.state.clockIn) {
                return foundDayTime
            }
        }
    }

    fillInTimes = () => {
      let foundDayTime = this.findDay()
      //if the loggedInuser has a user_time for this day, fill it in. 
      if (foundDayTime){
          console.log(foundDayTime)
        this.setState(prevState => {
            return {
                ...prevState, 
                clockIn: foundDayTime.clock_in.slice(11, 16),
                clockOut: foundDayTime.clock_out.slice(11, 16)
             }
        
              })
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
        this.props.deleteTime(this.props.user.id, this.state.capturedDate, this.state.clockIn, this.state.clockOut)
        this.setState({ 
            clockIn: '',
            clockOut: ''
        })
    }

    handleOnUpdate(event){
        event.preventDefault()
        this.props.updateTime(this.props.user.id, this.state.capturedDate, this.state.clockIn, this.state.clockOut)        
    }

    // findIfTimeExistByDay(){
    //     if (this.props.user){
            
            
    //     return this.props.user.usertimes.find(day => day.date_of_times === this.props.day)
            
    //     }
    // }

    render(){
     
        return(
           
            <div className="item">
              
                <form>
                    <span>{this.props.day}</span>
                    <label>Clock In</label>
                    <input type="time" value={this.state.clockIn} name="clockIn" placeholder="Clock In" className="clockIn" onChange={(event) => this.handleOnChange(event)} />
                    <label>Clock Out</label>
                    <input type="time" value={this.state.clockOut} name="clockOut" placeholder="Clock Out" className="clockOut" onChange={(event) => this.handleOnChange(event)} />

                    <div className="btnActions">                      
                        <AddButton addTimes={(event) => this.handleOnAdd(event)} /> 
                        <UpdateButton updateTimes={(event) => this.handleOnUpdate(event)}/>
                        <DeleteButton deleteTimes={(event) => this.handleOnDelete(event)}/>                                    
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

export default connect(mapStateToProps, {addTime, updateTime, deleteTime})(InputTimes)