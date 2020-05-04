export const ru = scale => props => `calc(${scale} * ${props.theme.responsiveUnitSize})`;

export const themeColor = colorName => props => props.theme.colors[colorName];
