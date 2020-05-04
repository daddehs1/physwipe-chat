// ResponsiveTheme component
// provides a styled-components theme and mediaQuery classes to children

import React from 'react';
import {ThemeProvider, createGlobalStyle} from 'styled-components'
import {useMediaQuery} from 'react-responsive'

function ResponsiveThemeView(props) {
  // define some properties using particular mediaQuery breakpoints and orientations
  const isLarge = useMediaQuery({minDeviceWidth: 850})
  const isMedium = useMediaQuery({minDeviceWidth: 450})
  const isSmall = useMediaQuery({minDeviceWidth: 350})
  const isTiny = !(isLarge || isMedium || isSmall);
  const isPortrait = useMediaQuery({orientation: 'portrait'})

  const mediaQueryProperties = {
    'isLarge': isLarge,
    'isMedium': isMedium,
    'isSmall': isSmall,
    'isTiny': isTiny,
    'isMobile': !isMedium,
    'isPortrait': isPortrait,
    'isLandscape': !isPortrait
  }

  // experimental responsive sizing
  // define base font-size
  // fine-tune based on size, then orientation, then windowHeight / windowWeight
  // can also be used for margin/padding
  let base;
  let heightBoost;
  let widthBoost;

  if (isTiny) {
    base = .6
    heightBoost = .25;
    widthBoost = .25;
  }

  if (isSmall) {
    base = .7
    heightBoost = .25;
    widthBoost = .25;
  }

  if (isMedium) {
    base = .9
    if (isPortrait) {
      heightBoost = .6;
      widthBoost = .15;
    } else {
      heightBoost = .2;
      widthBoost = .2;
    }
  }

  if (isLarge) {
    base = .9
    if (isPortrait) {
      heightBoost = 1;
      widthBoost = .15;
    } else {
      heightBoost = .2;
      widthBoost = .2;
    }
  }

  // define styled-components theme
  // also include our base sizes into this theme for use in children styled-components
  let theme = {
    responsiveUnitSize: `calc(${base}rem + ${heightBoost}vh + ${widthBoost}vw)`,
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      gray: '#797979'
    },
    mq: {
      ...mediaQueryProperties
    }
  }

  return (<ThemeProvider theme={theme}>
    <GlobalStyle/> {props.children}
  </ThemeProvider>)
}

let GlobalStyle = createGlobalStyle `
  *,
  *::after,
  *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  body,
  html {
      height: 100%;
      width: 100%;
      max-width: 1400px;
  }

  html {
      font-size: 62.5% !important;
  }

  body {
      box-sizing: border-box;
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background: ${props => props.theme.colors.white};
      color: ${props => props.theme.colors.black}
  }
`
export default ResponsiveThemeView;
