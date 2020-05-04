import styled from 'styled-components';
import {ru, themeColor} from '../../helpers/styled-components';

const DemoViewWrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Intro = styled.div `
  display: flex;
`

const ContentGroup = styled.div `
  margin: 1rem 1rem 4rem 1rem;
  display: flex;
  flex-direction: column;
`
const WhatContentGroup = styled(ContentGroup)`

`

const WhyContentGroup = styled(ContentGroup)`
  align-items: flex-end;
  text-align: right;
`

const GroupTitle = styled.span `
  font-size: ${ru(1.8)};
  margin-bottom: ${ru(.5)};
  font-weight: 500;
`

const GroupBody = styled.div `
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

const GroupParagraph = styled.div `
  font-size: ${ru(1.2)};

`

const BoldSpan = styled.span `
  font-weight: bold;
`

export {
  DemoViewWrapper,
  Intro,
  ContentGroup,
  GroupTitle,
  GroupBody,
  GroupParagraph,
  BoldSpan
};
