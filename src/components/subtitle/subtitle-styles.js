import styled from 'styled-components';
import {ru, themeColor} from '../../helpers/styled-components';

const SubtitleViewWrapper = styled.div `
  font-size: ${ru(2)};
  text-align: left;
  white-space: nowrap;
`

const SubtitlePortion = styled.div `
  color: ${props => props.empty
  ? "transparent"
  : themeColor('black')};
  user-select: ${props => props.empty
    ? "none"
    : "unset"};
`

const SubtitleBuffer = styled.span `

`

export {
  SubtitleViewWrapper,
  SubtitlePortion,
  SubtitleBuffer
};
