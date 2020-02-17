import React, {Component} from 'react'
import LoginButton from './buttons/LoginButton'
import Header from './Header'
import DemoMessage from './DemoMessage'
import {fetchUser} from '../actions/login'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"


class LoginForm extends Component{
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
        <div>
            <Header />
            <form onSubmit={this.handleSubmit}>
                <div id="sign_up_in">
                    <div id="sign_up">
                        <input type="text" name="name" id="sign_in_user" placeholder="Log In" onChange={this.handleOnChange} />
                        <LoginButton id="submit_user" />
                        <DemoMessage />
                    </div>
                </div>
            </form>
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user //user is the key from the reducer
    //will be able to utilize this.props.user to display in the form
})
export default connect(mapStateToProps, {fetchUser})(withRouter(LoginForm))
//we need to pass our actionCreators through connect so that they're bound to Redux's dispatch , and when they execute they can talk to the store.
//Our plain action creators that we wrote in a separate file do not talk to Redux on their own 

//const connect = (arg1, arg2) => {
    //connect gets access to the Redux store state through a context API 
    //let state = this.context.state 
    //and then executes the first argument and passes that state to it 
    //arg1(state) << mapStateOProps
    //connect also gets access to dispatch through a context API
    //bind all actions in arg2 to dispatch << mapDispatchToProps
    //the return value of connect 
    //is another function that accepts an argument of a coponent 
    //and it will add the selected info from the state we chose in mapstateoprops and the bound actionCreators to that component
    //return function(component){
        //component({propsfrommapStateToPropsmapDispatchToPropsgohere})
    //}
//}
