import {FETCH_CHAT_TOKEN_PENDING, FETCH_CHAT_TOKEN_SUCCESS, FETCH_CHAT_TOKEN_ERROR} from './actionTypes';

export const fetchChatTokenPending = () => {
  return {type: FETCH_CHAT_TOKEN_PENDING}
}

export const fetchChatTokenSuccess = ({token, identity}) => {
  return {
    type: FETCH_CHAT_TOKEN_SUCCESS,
    payload: {
      token: token,
      identity: identity
    }
  }
}

export const fetchChatTokenError = (error) => {
  return {type: FETCH_CHAT_TOKEN_ERROR, error: error}
}
