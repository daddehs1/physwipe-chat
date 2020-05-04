import React from 'react';

import {LogoViewWrapper, Line, Path} from './logo-styles';

const LogoView = () => {
  return (<LogoViewWrapper viewBox="0 0 100 100">
    <Line x1="5" y1="30" x2="95" y2="30"/>
    <Line x1="5" y1="30" x2="15" y2="70"/>
    <Line x1="15" y1="70" x2="85" y2="70"/>
    <Line x1="85" y1="70" x2="95" y2="30"/>
    <Path d="M 23, 60 C 12, 8, 154,70, 31,55"/>
  </LogoViewWrapper>)
}

export default LogoView;
