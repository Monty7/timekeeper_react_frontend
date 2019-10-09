import React, {Component} from 'react'

export default class LoginForm extends Component{

    state = {
        login: '',
        logout: ''
    }

    handleOnChange(event){
        this.setState({
            login: event.target.value
        })
    }
    
    handleSubmit(event){
        event.preventDefault()
        this.setState({
            login: ''
        })
    }

render(){
    return(
        <form onSubmit={(event) => this.handleSubmit(event) }>
            <div id="sign_up_in">
            <div id="sign_up">
                <input type="text" name="username" id="sign_in_user" placeholder="Log In" onChange={(event) => this.handleOnChange(event)} />
                <input type="submit" id="submit_user" />
            </div>
            </div>
        </form>
        )
    }
}