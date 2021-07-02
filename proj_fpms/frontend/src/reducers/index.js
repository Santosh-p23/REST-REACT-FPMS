import { combineReducers } from 'redux'
import papers from './papers'
import errors from './errors'
import messages from './messages'
import auth from './auth'

export default combineReducers({
    papers,
    errors,
    messages,
    auth

});