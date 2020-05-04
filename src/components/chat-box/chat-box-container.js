import React, {useState, useCallback, useEffect, useRef} from 'react';
import {v4 as uuidv4} from 'uuid';

import ChatBoxView from './chat-box-view'
const Chat = require('twilio-chat');

const ChatBoxContainer = props => {
  // PROPS
  const {fetchChatToken, token, identity} = props;

  // STATE, REDUCER
  const [messages, setMessages] = useState([]);
  const [connectedStatus, setConnectedStatus] = useState("disconnected");
  const [channel, setChannel] = useState(null)
  const messagesWindowRef = useRef(null);
  // CALLBACKS, MEMOS

  const sendMessage = message => {
    channel.sendMessage(message)
  }

  const handleConnectButtonClick = () => {
    setConnectedStatus("pending");
    fetchChatToken();
  }

  const addMessage = useCallback(message => {
    setMessages(messages => [
      ...messages, {
        author: message.author,
        body: message.body,
        id: uuidv4()
      }
    ])
  }, [])

  const handleMessageAdded = useCallback(message => {
    addMessage({author: message.author, body: message.body})
  }, [addMessage]);

  const handleMemberJoined = useCallback(member => {
    addMessage({author: 'SYSTEM', body: `${member.identity} has joined the chat`})
  }, [addMessage]);

  const handleMemberLeft = useCallback(member => {
    addMessage({author: 'SYSTEM', body: `${member.identity} has left the chat`})
  }, [addMessage]);

  const addChannelEventListeners = useCallback(_channel => {
    _channel.on('messageAdded', handleMessageAdded);
    _channel.on('memberJoined', handleMemberJoined);
    _channel.on('memberLeft', handleMemberLeft);
  }, [handleMemberJoined, handleMemberLeft, handleMessageAdded])

  const removeChannelEventListeners = useCallback(_channel => {
    _channel.on('messageAdded', message => {
      addMessage({author: message.author, body: message.body})
    });
    _channel.on('memberJoined', member => {
      addMessage({author: 'SYSTEM', body: `${member.identity} has joined the chat`})
    });
    _channel.on('memberLeft', member => {
      addMessage({author: 'SYSTEM', body: `${member.identity} has left the chat`})
    })
  }, [addMessage])

  const connectMessagingClient = useCallback((token) => {
    // Initialize the Chat messaging client
    Chat.Client.create(token).then(function(client) {
      let messagingClient = client;
      messagingClient.getPublicChannelDescriptors().then(function(channels) {
        let generalChannel = channels.items.filter(channel => channel.uniqueName === 'general')[0];
        messagingClient.getChannelBySid(generalChannel.sid).then((_channel) => {
          _channel.join().then(() => {
            setConnectedStatus("connected");
            addChannelEventListeners(_channel)
            setChannel(_channel);
          });
        });
      })
      // tc.messagingClient.on('tokenExpired', refreshToken);
    });
  }, [addChannelEventListeners]);
  // EFFECTS
  useEffect(() => {
    if (token !== null) {
      connectMessagingClient(token)
    }
  }, [connectMessagingClient, token])

  useEffect(() => {
    return() => {
      if (channel) {
        channel.leave()
        removeChannelEventListeners();
      }
    }
  }, [channel, removeChannelEventListeners])

  useEffect(() => {
    messagesWindowRef.current.scrollTo({top: messagesWindowRef.current.scrollHeight, behavior: 'smooth'});
  }, [messages]);

  // VIEW PROPS
  const viewProps = {
    connectedStatus,
    messagesWindowRef,
    handleConnectButtonClick,
    sendMessage,
    messages,
    identity
  };
  return <ChatBoxView {...viewProps}/>
}

export default ChatBoxContainer;
