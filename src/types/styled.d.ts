import 'styled-components';

export interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
  hex: string;
}

export interface ThemeLibrary {
  [themeName: string]: DefaultTheme;
}

export type StyleProp = Color | number;

declare module 'styled-components' {
  export interface DefaultTheme {
    blue: Color;
    purple: Color;
    pink: Color;
    red: Color;
    orange: Color;
    yellow: Color;
    green: Color;
    cyan: Color;
    'gray-100': Color;
    'gray-200': Color;
    'gray-300': Color;
    'gray-400': Color;
    'gray-500': Color;
    'gray-600': Color;
    'gray-700': Color;
    'gray-800': Color;
    'gray-900': Color;

    'background-black': Color;
    'body-bg': Color;

    default: Color;
    primary: Color;
    secondary: Color;
    success: Color;
    info: Color;
    warning: Color;
    danger: Color;

    white: Color;
    dark: Color;
  }
}
