import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import manageTime from './reducers/manageTime'

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';


const store = createStore(manageTime, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}> 

        <App />
    </Provider>,
    document.getElementById('root')
)