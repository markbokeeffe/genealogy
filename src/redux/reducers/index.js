import { combineReducers } from 'redux';
import ancestors from './ancestors';
import dialogs from './dialogs';

export default combineReducers( { ancestors, dialogs } );