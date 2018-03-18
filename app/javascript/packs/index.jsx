import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route } from 'react-router-dom'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import { createLogger } from 'redux-logger'
import allReducers from './reducers'
import App from './components/App'

import MeetingsPage from './components/MeetingsPage'
import MeetingPage from './components/MeetingPage'

const logger = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk, promise, logger))
)
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render((
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <Route exact path="/" component={MeetingsPage}/>
          <Route path="/meetings/:id" component={MeetingPage}/>
        </App>
      </BrowserRouter>
    </Provider>
  ), document.body.appendChild(document.createElement('div')))
})