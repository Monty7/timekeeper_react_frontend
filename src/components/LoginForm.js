import React from 'react'
import LoginButton from './buttons/LoginButton'
import Header from './Header'



const LoginForm = props => {

    return(
        <div>
            <Header />
            <form onSubmit={(event) => props.submitValue(event) }>
                <div id="sign_up_in">
                <div id="sign_up">
                    <input type="text" name="name" id="sign_in_user" placeholder="Log In" onChange={(event) => props.inputValue(event)} />
                    <LoginButton id="submit_user" />
            
                </div>
                </div>
            </form>
        </div>
        )
}

export default LoginForm

