import {connect} from 'react-redux';
import fetchChatToken from '../../redux/fetch-chat-token/fetchChatToken'
import ChatBoxContainer from './chat-box-container'

const mapStateToProps = state => {
  const {identity, token} = state.fetchChatToken;
  return {identity, token};
}

const mapDispatchToProps = {
  fetchChatToken
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatBoxContainer);
