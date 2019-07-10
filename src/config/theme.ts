import { DefaultTheme } from 'styled-components';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
import Styles from 'sass-extract-loader!../assets/sass/themes.scss';

const themesMap = Styles.global.$themes.value;

const themes: StyleTypes.ThemeLibray = {};
Object.entries(themesMap).forEach(
  ([themeName, { value: themeMap }]: [string, []]) => {
    const theme: DefaultTheme = {};
    Object.entries(themeMap).forEach(
      ([prop, { value }]: [string, StyleTypes.StyleProp]) => {
        theme[prop] = value;
      }
    );
    themes[themeName] = theme;
  }
);
export default themes;
