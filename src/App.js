import React, {Component} from 'react'
import CalendarContainer from './containers/CalendarContainer'
import LoginFormContainer from './containers/LoginFormContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import { createBrowserHistory } from 'history'

import './styles/App.css'
import './styles/flexbox.css'

//const history = createBrowserHistory()

export default class App extends Component {
    render() {
        return (
        <div className="App">
        <Router>
            <Route exact path="/" component={LoginFormContainer} />
            <Route exact path="/calendar" component={CalendarContainer} />
        </Router>
                
            </div>
        )
    }
}