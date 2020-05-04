import styled from 'styled-components';
import {ru, themeColor} from '../../helpers/styled-components';

const PhyswipeInputViewWrapper = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Dummy = styled.span `
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  height: 0;
  font-size: 1.5rem;
  font-weight: 600;
`

const BufferDisplay = styled.span `
  position: absolute;
  top: 50%;
  left: calc(50% + ${props => props.offset}px);
  transform: translateY(-50%);
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: underline;
  text-align: left;
`

const ChoiceNumber = styled.span `
  margin-right: .25rem;
`

const Word = styled.span `
`

const Alternative = styled.div `
  display: inline-block;
  margin: .5rem;
  font-size: 1.4rem;
  font-weight: normal;
  border-bottom: ${props => props.selected
  ? "1px dashed black"
  : "none"};
`
const Selector = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  border-radius: 1rem;
  background-color: white;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;

  display: ${props => props.hidden
  ? "none"
  : "flex"};
`

const InputWrapper = styled.div `
  position: relative;
  flex-grow: 1;
`

const Input = styled.input `
  width: 100%;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem 1rem;
  text-align: center;
  border: 1px solid ${themeColor('black')};
  border-radius: 1rem;
  cursor: ${props => props.disabled
  ? 'not-allowed'
  : 'input'};
  &:focus {
    outline: none;
    ${ ''/* border: 2px solid white; */}

  ${props => props.hideCursor && `
    color: transparent;
    text-shadow: 0 0 0 black;
  `}


}`

const SendButton = styled.div `
  font-size: ${ru(1.2)};
  font-weight: 600;
  margin: ${ru(1)};
  cursor: ${props => props.disabled
  ? 'not-allowed'
  : 'pointer'}
`

export {
  PhyswipeInputViewWrapper,
  Dummy,
  BufferDisplay,
  ChoiceNumber,
  Word,
  Alternative,
  Selector,
  InputWrapper,
  Input,
  SendButton
};
