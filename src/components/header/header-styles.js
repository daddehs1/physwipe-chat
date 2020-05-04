import styled from 'styled-components';
import {ru, themeColor} from '../../helpers/styled-components';

const HeaderViewWrapper = styled.div `
  padding: 1rem 3rem;
  border-bottom: 1px dashed ${themeColor('black')};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`

const LogoContainer = styled.div `
  min-height: 10rem;
  min-width: 10rem;
`

const Title = styled.div `
  font-size: ${ru(4)};
  margin: 1rem;
`

const SubtitleContainer = styled.div `
  text-align: left;
  margin: 1rem;
`

const NavigationContainer = styled.div `
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 1rem;
  display: flex;
  align-items: flex-end;

`

export {
  HeaderViewWrapper,
  LogoContainer,
  Title,
  SubtitleContainer,
  NavigationContainer
}
