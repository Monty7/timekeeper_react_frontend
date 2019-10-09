import React, {Component} from 'react'
import CalendarContainer from './containers/CalendarContainer'
import './styles/App.css'
import './styles/flexbox.css'

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <CalendarContainer />
            </div>
        )
    }
}