import React from 'react';

import {
  PhyswipeInputViewWrapper,
  InputWrapper,
  Input,
  Selector,
  Alternative,
  ChoiceNumber,
  Word,
  SendButton
} from './physwipe-input-styles';

const PhyswipeInputView = props => {
  return (<PhyswipeInputViewWrapper>
    <InputWrapper>
      <Input disabled={props.isDisabled} placeholder={props.isDisabled
          ? 'Please connect to chat to enter text'
          : ''} hideCursor={props.hideCursor} value={props.input + props.buffer} type='text' onKeyDown={props.handleKeyDown} onKeyUp={props.handleKeyUp} onChange={props.handleChange} onBlur={props.handleBlur} onMouseDown={props.handleClick}/>
      <Selector hidden={!props.showSelector}>
        {
          props.alternativeWords.map((alt, index) => (<Alternative key={alt} selected={index === props.focusedAltIndex}>
            <ChoiceNumber>{(index + 1) + ":"}{" "}</ChoiceNumber>
            <Word>{alt}</Word>
          </Alternative>))
        }
      </Selector>
    </InputWrapper>
    <SendButton disabled={props.isDisabled} onClick={() => {
        if (!props.isDisabled) {
          props.handleSubmitInput()
        }
      }}>Send</SendButton>
  </PhyswipeInputViewWrapper>)
}

export default PhyswipeInputView;
