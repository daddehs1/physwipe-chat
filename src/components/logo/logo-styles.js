import styled from 'styled-components';
import {themeColor} from '../../helpers/styled-components';

const LogoViewWrapper = styled.svg `
`

const Line = styled.line `
  stroke: ${themeColor('black')};
  stroke-width: 2px;
`

const Path = styled.path `
  stroke: ${themeColor('black')};
  stroke-width: 2px;
  fill: transparent;
`

export {
  LogoViewWrapper,
  Line,
  Path
};
