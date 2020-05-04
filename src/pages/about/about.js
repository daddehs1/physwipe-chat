import React from 'react';
import styled from 'styled-components'

function About() {
  return (<React.fragment>
    <Content>
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
            Try typing in the input below by swiping hard on your keyboard
          </GroupParagraph>
          <GroupParagraph>
            Confirm the displayed input by pressing space
          </GroupParagraph>
          <GroupParagraph>
            Choose an alternative by pressing a number or using arrow keys + enter.
          </GroupParagraph>
          <GroupParagraph>
            Remove the input by pressing backspace
          </GroupParagraph>

        </GroupBody>
      </ContentGroup>

      <ContentGroup>
        <GroupTitle>
          "But why have you done this?"
        </GroupTitle>
        <GroupBody>
          <GroupParagraph>
            We noticed that there is just no good
            <BoldSpan>{" "}physical keyboard swipe-based text input{" "}</BoldSpan>
            on the market and we wanted to change that.
          </GroupParagraph>
          <GroupParagraph>Tired of using both hands to type on your laptop?</GroupParagraph>
          <GroupParagraph>Lost all but one finger in a freak accident?</GroupParagraph>
          <GroupParagraph>
            Physwipe has your covered.
          </GroupParagraph>
        </GroupBody>
      </ContentGroup>

      <ContentGroup>
        <GroupTitle>
          "Is this a joke?"
        </GroupTitle>
        <GroupBody>
          <GroupParagraph>
            <ItalicSpan>Au contraire. {" "}</ItalicSpan>
            We at Physwipe are
            <BoldSpan>{" "}serious{" "}</BoldSpan>
            about spreading our message of equal-opportunity swiping
          </GroupParagraph>
          <GroupParagraph>Why should swipe-based text input be limited only to the mobile phone using elite?</GroupParagraph>
          <GroupParagraph>
            Finally, a text input for the rest of us!</GroupParagraph>
        </GroupBody>
      </ContentGroup>
    </Content>
  </React.fragment>)
}
const ItalicSpan = styled.span `
  font-style: italic;
`
const ContentGroup = styled.div `
  width: 100%;
  margin: 1rem 1rem 4rem 1rem;
`

const ContentColumn = styled.div `
  height: 100%;
`

const GroupTitle = styled.div `
  margin-bottom: .5rem;
  display: inline;
  font-weight: 500;

`

const GroupBody = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`

const GroupParagraph = styled.div `
  text-align: left;
  font-size: 1.6rem;
  margin: .5rem;

`

const BoldSpan = styled.span `
  font-weight: bold;
`

const Content = styled.div `
  width: 100%;
  padding: 2rem;
  flex: 1;
`
export default About;
