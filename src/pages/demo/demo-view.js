import React from 'react';

import {
  DemoViewWrapper,
  Intro,
  ContentGroup,
  GroupTitle,
  GroupBody,
  GroupParagraph,
  BoldSpan
} from './demo-styles';
import ChatBox from '../../components/chat-box';

const DemoView = props => {
  return (<DemoViewWrapper>
    <Intro>
      <ContentGroup>
        <GroupTitle>
          "What even is this?"
        </GroupTitle>
        <GroupBody>
          <GroupParagraph>
            The best way to explain is with a
            <BoldSpan>{" "}demo!</BoldSpan>
          </GroupParagraph>
          <GroupParagraph>
            Try typing in the chatbox below by swiping hard on your keyboard
          </GroupParagraph>
          <GroupParagraph>
            Confirm the displayed input by pressing space
          </GroupParagraph>
          <GroupParagraph>
            Choose an alternative by pressing a number or using arrow left/right + arrow up.
          </GroupParagraph>
          <GroupParagraph>
            Remove the input by pressing backspace
          </GroupParagraph>
        </GroupBody>
      </ContentGroup>
    </Intro>
    <ChatBox/>
  </DemoViewWrapper>);
}

export default DemoView;
