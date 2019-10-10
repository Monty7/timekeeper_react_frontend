import React, {Component} from 'react'
import LoginForm from '../components/LoginForm'
import {fetchUser} from '../actions/login'
import { connect } from 'react-redux'

//import BASEURL from '../baseUrl'
import LoginButton from '../components/buttons/LoginButton'

class LoginFormContainer extends Component{

    render(){
        return(
            
                <LoginForm />
           
        )
    }
}

const mapStateToProps = (state) => {  
    //debugger
    return {
        
        state
    }
}
export default LoginFormContainer
//export default connect(mapStateToProps)(LoginFormContainer)