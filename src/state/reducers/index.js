import { combineReducers } from 'redux';
import fetchpost from './fetchpost'

export default combineReducers({
	data: fetchpost,
});