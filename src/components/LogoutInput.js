import React from 'react'
import {Link} from 'react-router-dom'

const LogoutInput = () => {
    //console.log(this.props.nameOfUser)
    return (
        
        <div id="welcomeUser">
            <p></p>
            <Link to="/logout" id="logoutLink" replace>logout</Link>
        </div>
    )
}

export default LogoutInput