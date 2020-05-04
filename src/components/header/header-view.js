import React from 'react';

import {HeaderViewWrapper, LogoContainer, Title, SubtitleContainer} from './header-styles';

import Logo from '../logo';
import Subtitle from '../subtitle';

const HeaderView = props => {
  return (<HeaderViewWrapper>
    <LogoContainer>
      <Logo/>
    </LogoContainer>
    <Title>Physwipe</Title>
    <SubtitleContainer>
      <Subtitle/>
    </SubtitleContainer>
  </HeaderViewWrapper>)
}

export default HeaderView;
