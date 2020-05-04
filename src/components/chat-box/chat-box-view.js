import React from 'react';

import {
  ChatBoxViewWrapper,
  TopBanner,
  BannerMessage,
  ConnectButton,
  Messages,
  Message,
  AuthorLabel,
  Input
} from './chat-box-styles';

import PhyswipeInput from '../physwipe-input';

const ChatBoxView = props => {
  console.log(props.messages)
  const connectionBannerMessages = {
    'disconnected': <span>You are not connected{' '}<ConnectButton onClick={props.handleConnectButtonClick}>Join Chat!</ConnectButton>
    </span>,
    'pending': <span>Connecting...</span>,
    'connected': <span>You are connected as{' '}
        <AuthorLabel>{props.identity}</AuthorLabel>
      </span>
  }

  return (<ChatBoxViewWrapper>
    <TopBanner>
      <BannerMessage>{connectionBannerMessages[props.connectedStatus]}</BannerMessage>
    </TopBanner>
    <Messages ref={props.messagesWindowRef}>{
        props.messages.map(message => {
          let isSystem = message.author === 'SYSTEM';
          return <Message key={message.id} isSystem={isSystem}>
            {
              !isSystem && <React.Fragment>
                  <AuthorLabel>{message.author}</AuthorLabel>{': '}
                </React.Fragment>
            }
            {message.body}
          </Message>
        })
      }</Messages>
    <Input>
      <PhyswipeInput isDisabled={props.connectedStatus !== 'connected'} handleSubmit={props.sendMessage}></PhyswipeInput>
    </Input>
  </ChatBoxViewWrapper>)
}

export default ChatBoxView;
