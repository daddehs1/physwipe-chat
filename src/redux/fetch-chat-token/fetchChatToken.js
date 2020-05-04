import {fetchChatTokenPending, fetchChatTokenSuccess, fetchChatTokenError} from './actions';

const fetchChatToken = () => {
  return dispatch => {
    dispatch(fetchChatTokenPending());
    let url = '/api/token';
    let options = {
      method: "POST",
      body: {
        deviceId: 'browser'
      }
    }
    fetch(url, options).then(res => res.json()).then(res => {
      if (res.error) {
        throw(res.error);
      }
      let {token, identity} = res;
      dispatch(fetchChatTokenSuccess({token, identity}));
    }).catch(error => {
      dispatch(fetchChatTokenError(error));
    })
  }
}

export default fetchChatToken;
