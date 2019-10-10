import React, {Component} from 'react'
import LoginButton from './buttons/LoginButton'
import Header from './Header'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/login'
import { statement } from '@babel/template'

class LoginForm extends Component{
    // componentWillMount(){
    //     this.props.fetchUser()
    // }
    state = {
        name: ''
    }

    handleOnChange(event){
      
        this.setState({
            [event.target.name]: event.target.value
        }) 
    }
    
    handleSubmit(event){
        event.preventDefault()
        // this.setState({
        //     user: ''
        // })
       // console.log(this.state.user)
        this.props.fetchUser({name: this.state.name})
    }

render(){
    return(
        <div>
            <Header />
            <form onSubmit={(event) => this.handleSubmit(event) }>
                <div id="sign_up_in">
                <div id="sign_up">
                    <input type="text" name="name" id="sign_in_user" placeholder="Log In" onChange={(event) => this.handleOnChange(event)} />
                    <LoginButton id="submit_user" />
            
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

export default connect(mapStateToProps, {fetchUser})(LoginForm)