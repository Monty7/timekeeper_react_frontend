import React, {Component} from 'react'
import LoginForm from '../components/LoginForm'
import {fetchUser} from '../actions/login'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import BASEURL from "../baseUrl"

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
       // this.props.fetchUser({name: this.state.name}, this.props.history)
       fetch(BASEURL+'/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.state)
    })
    .then(resp => resp.json())
    .then(userObj => {
        console.log(userObj)
        this.props.updateUser(userObj)
        localStorage.setItem('loggedInUserID', userObj.id)
        this.props.history.push('/calendar')
    })
}

    render(){
        return(
            
            <LoginForm user={this.fetchUser} inputValue={this.handleOnChange} submitValue={this.handleSubmit}/>
           
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { updateUser: userObj => dispatch({type: 'FETCH_USER', payload: userObj}) }
}


//export default LoginFormContainer
export default connect(null, mapDispatchToProps)(withRouter(LoginFormContainer))

