import styled from 'styled-components'
import {ru} from '../../helpers/styled-components';

const LayoutWrapper = styled.div `
  user-select: none;
  display: flex;
  flex-direction: column;
`
const HeaderContainer = styled.div `

`

const ContentContainer = styled.div `
  ${ ''/* flex-grow: 1; */}
  padding: ${ru(1)};
`

const FooterContainer = styled.div `
  height: 0%
`

export {
  LayoutWrapper,
  HeaderContainer,
  ContentContainer,
  FooterContainer
}
