import React, {Component} from 'react'
import InputTimes from '../components/InputTimes'
import { connect } from 'react-redux'
import BASEURL from '../baseUrl'

class LoginFormContainer extends Component{

    render(){
        return(
            
                <LoginForm />

        )
    }
}

mapStateToProps = () => { }

export default connect()(LoginFormContainer)