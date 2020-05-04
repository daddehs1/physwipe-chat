import styled from 'styled-components';
import {ru, themeColor} from '../../helpers/styled-components';

const ChatBoxViewWrapper = styled.div `
  height: ${ru(23.5)};
  width: ${ru(50)};
  border: 2px solid ${themeColor('black')};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${themeColor('white')};
`

const TopBanner = styled.div `
  border-bottom: 1px solid ${themeColor('black')};
  ${ ''/* border-radius: 1rem; */}
  min-height: ${ru(3)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${ru(1.1)};
`

const BannerMessage = styled.span `

`

const ConnectButton = styled.span `
  cursor: pointer;
  font-weight: 600;
`

const Messages = styled.div `
  flex-grow: 1;
  overflow-y: scroll;
  padding: ${ru(1)};
`

const Message = styled.div `
  font-size: ${ru(1.2)};
  padding: ${ru(.25)};
  font-style: ${props => props.isSystem
  ? 'italic'
  : 'normal'};
`

const AuthorLabel = styled.span `
  font-weight: bold;
`

const Input = styled.div `
  border-top: 1px solid ${themeColor('black')};
  padding: .5rem;
`

export {
  ChatBoxViewWrapper,
  TopBanner,
  BannerMessage,
  ConnectButton,
  Messages,
  Message,
  AuthorLabel,
  Input
};
