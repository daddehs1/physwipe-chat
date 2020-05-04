import {FETCH_CHAT_TOKEN_PENDING, FETCH_CHAT_TOKEN_SUCCESS, FETCH_CHAT_TOKEN_ERROR} from './actionTypes';

const initialState = {
  pending: false,
  token: null,
  identity: null,
  error: null
}

export default function fetchChatTokenReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHAT_TOKEN_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_CHAT_TOKEN_SUCCESS:
      return {
        ...state,
        pending: false,
        token: action.payload.token,
        identity: action.payload.identity
      }
    case FETCH_CHAT_TOKEN_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state;
  }
}

// Selectors

export const getChatToken = state => state.token;
export const getChatIdentity = state => state.identity;
export const getChatTokenPending = state => state.pending;
export const getChatTokenError = state => state.error;
