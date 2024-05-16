import { DefaultTheme } from "styled-components";
import colors from '../constants/colors';

const colorTheme: DefaultTheme = {
  type: "dark",
  palette: {
    text: {
      primary: colors.white,
      secondary: colors.lavenderGrey,
      tertiary: colors.blueGray,
      fourth: colors.cadetBlue,
      fifth: colors.skyBlue,
      highlights: colors.blue
    },
    common: {
      black: colors.black,
      white: colors.white,
    },
    primary: {
      light: colors.lightSlateBlue,
      main: colors.mediumSlateBlue,
      dark: colors.mediumSlateBlue,
      contrastText: colors.white,
    },
    secondary: {
      light: colors.blueBell,
      main: colors.slateBlue,
      dark: colors.outerSpace,
      contrastText: colors.white,
    },
    background: {
      paper: colors.midnightBlue,
      lightPaper: colors.outerSpace,
      darkPaper: colors.ebonyClay,
      default: colors.darkLiver,
    },
  },
  navbar: {
    background: colors.midnightBlue,
    icon: colors.graniteGray,
    border: colors.graniteGray,
  },
  page: {
    background: colors.darkLiver,
    scrollbarThumb: colors.outerSpace,
  },
  inputs: {
    background: colors.midnightBlue,
    border: colors.outerSpace,
    borderActive: colors.outerSpace,
    error: colors.bittersweet,
    icon: colors.slateBlue,
    selector: colors.mediumSlateBlue,
    caret: colors.mediumSlateBlue,
    label: colors.cadetBlue,
    text: colors.white,
  },
  buttons: {
    primary: {
      background: colors.blue,
      hoverBackground: colors.lightSlateBlue,
      color: colors.white,
      hoverColor: colors.white,
    },
    secondary: {
      background: colors.outerSpace,
      hoverBackground:colors. white,
      color: colors.lavenderGrey,
      hoverColor: colors.lavenderGrey,
    },
    tertiary: {
      background: colors.darkGrey,
      hoverBackground: colors.midnightBlue,
      color: colors.lavenderGrey,
      hoverColor: colors.lavenderGrey,
    },
    danger: {
      background: colors.bittersweet,
      hoverBackground: colors.lightSalmon,
      color: colors.white,
      hoverColor: colors.white,
    },
    transparent: { 
      background: colors.transparent,
      hoverBackground: colors.midnightBlue,
      color: colors.white,
      hoverColor: colors.white
    }
  },
  dialog: {
    background: colors.midnightBlue,
    hover: colors.ebonyClay
  },
  toggle: {
    background: colors.skyBlue,
    active: colors.blue
  },
  cards: {
    border: colors.skyBlue,
    readMore: colors.skyBlue,
    color: colors.blueGray,
    background: colors.midnightBlue
  }
};

export default colorTheme;
