import { DefaultTheme } from "styled-components";
import colors from '../constants/colors';

const lightTheme: DefaultTheme = {
  type: "light",
  palette: {
    text: {
      primary: colors.ebonyClay,
      secondary: colors.slateBlue,
      tertiary: colors.blueGray,
      fourth: colors.cadetBlue,
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
      paper: colors.white,
      lightPaper: colors.lightPaper,
      darkPaper: colors.darkGrey,
      default: colors.defaultPaper,
    },
  },
  navbar: {
    background: colors.darkGrey,
    icon: colors.slateBlue,
    border: colors.outerSpace,
  },
  page: {
    background: colors.white,
    scrollbarThumb: colors.lavenderGrey,
  },
  form: {
    background: colors.white,
  },
  modal: {
    background: colors.white,
    primaryText: colors.ebonyClay,
    secondaryText: colors.cadetBlue,
    shadow: colors.mutedBlueDark,
  },
  card: {
    background: colors.white,
    lightContrastBackground: colors.lightPaper,
    darkContrastBackground: colors.darkGrey,
    shadow: colors.mutedBlue,
  },
  inputs: {
    background: colors.white,
    border: colors.lavenderGrey,
    borderActive: colors.lightSlateBlue,
    error: colors.bittersweet,
    icon: colors.slateBlue,
    selector: colors.mediumSlateBlue,
    caret: colors.mediumSlateBlue,
    label: colors.slateBlue,
    text: colors.ebonyClay,
  },
  selector: {
    background: colors.white,
    shadow: colors.mutedBlueDark,
    text: colors.ebonyClay,
    activeText: colors.mediumSlateBlue,
    border: colors.slateBlue,
  },
  buttons: {
    primary: {
      background: colors.blue,
      hoverBackground: colors.lightSlateBlue,
      color: colors.white,
      hoverColor: colors.white,
    },
    secondary: {
      background: colors.lightPaper,
      hoverBackground: colors.defaultPaper,
      color: colors.slateBlue,
      hoverColor: colors.slateBlue,
    },
    tertiary: {
      background: colors.white,
      hoverBackground: colors.ebonyClay,
      color: colors.cadetBlue,
      hoverColor: colors.cadetBlue,
    },
    danger: {
      background: colors.bittersweet,
      hoverBackground: colors.lightSalmon,
      color: colors.white,
      hoverColor: colors.white,
    },
  },
  status: {
    draft: colors.darkGrey,
    pending: colors.orangeYellow,
    paid: colors.shamrockGreen,
  },
};

export default lightTheme;
