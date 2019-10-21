import React, {Component} from 'react'
import LoginForm from '../components/LoginForm'
import {fetchUser} from '../actions/login'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"

class LoginFormContainer extends Component{
    state = {
        name: ''
    }

    handleOnChange = (event) => {
      
        this.setState({
            [event.target.name]: event.target.value
        }) 
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.fetchUser({name: this.state.name}, this.props.history)
    }


    render(){
        return(
            
                <LoginForm formData={this.state} inputValue={this.handleOnChange} submitValue={this.handleSubmit}/>
           
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.user //user is the key from the reducer
    //will be able to utilize this.props.user to display in the form
})
export default connect(mapStateToProps, {fetchUser})(withRouter(LoginFormContainer))

