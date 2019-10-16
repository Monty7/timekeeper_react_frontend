import React from 'react'
import {Link} from 'react-router-dom'

const LogoutInput = (props) => {
    console.log(props.user1)
    //debugger
    return (
        
        <div id="welcomeUser">
            <p></p>
            <Link to="/logout" id="logoutLink" replace>logout</Link>
        </div>
    )
}

export default LogoutInput