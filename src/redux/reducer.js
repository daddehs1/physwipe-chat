import {combineReducers} from 'redux';
import fetchChatTokenReducer from './fetch-chat-token/reducer';

const rootReducer = combineReducers({fetchChatToken: fetchChatTokenReducer})

export default rootReducer;
