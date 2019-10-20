import React, {Component} from 'react'
import CalendarContainer from './containers/CalendarContainer'
import LoginFormContainer from './containers/LoginFormContainer'
import { Route } from 'react-router-dom';
import { withRouter } from "react-router-dom"
import {checkForUser} from './actions/login'
import { connect } from 'react-redux'

import './styles/App.css'
import './styles/flexbox.css'


class App extends Component {
    componentDidMount(){
 
        let userID = localStorage.getItem('loggedInUserID');
     
        if(userID){
          this.props.checkForUser(userID, this.props.history)
        }else{
            return this.props.history.push('/')
        }

     }

    render() {
        return (
        <div className="App">
            <Route exact path="/" component={LoginFormContainer} />
            <Route exact path="/calendar" component={CalendarContainer} />
                
        </div>
        )
    }
}

export default connect(null, {checkForUser})(withRouter(App))