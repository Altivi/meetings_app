import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import meetings from './reducer-meetings'

const allReducers = combineReducers({ meetings })

export default allReducers