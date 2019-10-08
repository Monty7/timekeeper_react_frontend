import React, {Component} from 'react'
import AddButton from '../butons/AddButton'
import UpdateButton from '../buttons/UpdateButton'
import DeleteButton from '../buttons/DeleteButton'

export default class InputTimes extends Component{
    state = {
        clockIn: '',
        clockIn: ''
    }

    handleOnChange(event){
        this.setState({
            clockIn: event.target.value,
            clockOut: event.target.value
        })
    }

    render(){
        return(
            <span>01</span>
            <label>Clock In</label>
            <input type="time" name="clockIn"placeholder="Clock In" class="clockIn" />
            <label>Clock Out</label>
            <input type="time" name="clockOut" placeholder="Clock Out" class="clockOut" />


            <AddButton />
            <UpdateButton />
            <DeleteButton />
        )
    }   
}