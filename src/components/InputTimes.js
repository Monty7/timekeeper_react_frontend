import React, {Component} from 'react'
import AddButton from './buttons/AddButton'
import UpdateButton from './buttons/UpdateButton'
import DeleteButton from './buttons/DeleteButton'

export default class InputTimes extends Component{
    state = {
        clockIn: '',
        clockOut: ''
    }

    handleOnChange(event){
        this.setState({
            clockIn: event.target.value,
            clockOut: event.target.value
        })
    }

    handleOnSubmit(event){
        event.preventDefault()
      //  this.props.
        this.setState({
            clockIn: '',
            clockOut: ''
        })
    }

    render(){
        return(
            <div className="item">
           
                <form>
                    <span>{this.props.day}</span>
                    <label>Clock In</label>
                    <input type="time" name="clockIn"placeholder="Clock In" class="clockIn" onChange={(event) => this.handleOnChange(event)} />
                    <label>Clock Out</label>
                    <input type="time" name="clockOut" placeholder="Clock Out" class="clockOut" onChange={(event) => this.handleOnChange(event)} />

                    <div>
                        <AddButton />
                        <UpdateButton />
                        <DeleteButton />
                    </div>
                </form>
           </div>
        )
    }   
}