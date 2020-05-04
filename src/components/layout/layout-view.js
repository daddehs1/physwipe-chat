// Layout component
// simple component which holds the layout for this application
// divided into 3 main sections (header, content, )
// pages are fed into content section through Router component

import React from 'react';
import Router from '../../router';

import {LayoutWrapper, HeaderContainer, ContentContainer, FooterContainer} from './layout-styles';

import Header from '../header';

function LayoutView() {
  return (<LayoutWrapper>

    {/* Header */}
    <HeaderContainer>
      <Header/>
    </HeaderContainer>

    {/* Content */}

    <ContentContainer>
      <Router/>
    </ContentContainer>

    {/* Footer */}
    <FooterContainer/>

  </LayoutWrapper>);
}

export default LayoutView;
