import React, {Component} from 'react'
import LoginButton from './buttons/LoginButton'
import Header from './Header'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/login'
import { statement } from '@babel/template'

class LoginForm extends Component{
    componentWillMount(){
        this.props.fetchUser()
    }
    // state = {
    //     login: '',
    //     logout: ''
    // }

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
        <div>
            <Header />
            <form onSubmit={(event) => this.handleSubmit(event) }>
                <div id="sign_up_in">
                <div id="sign_up">
                    <input type="text" name="username" id="sign_in_user" placeholder="Log In" onChange={(event) => this.handleOnChange(event)} />
                    <LoginButton id="submit_user" />
            
                </div>
                </div>
            </form>
        </div>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.user.name 
})

export default connect(null, {fetchUser})(LoginForm)