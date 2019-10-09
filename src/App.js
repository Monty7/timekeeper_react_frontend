import React, {Component} from 'react'
import CalendarContainer from './containers/CalendarContainer'
import LoginFormContainer from './containers/LoginFormContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/App.css'
import './styles/flexbox.css'

export default class App extends Component {
    render() {
        return (
            <div className="App">
        <Router>
            <Route exact path="/" component={LoginFormContainer} />

        </Router>
                
            </div>
        )
    }
}