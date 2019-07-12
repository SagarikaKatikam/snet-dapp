import { createMuiTheme } from "@material-ui/core/styles";

const customBlue = "#4086ff";
const customHoverBlue = "#005ACB";

const purple = "#220D3A";

const darkShadedGray = "#212121";
const mediumShadeGray = "#666";
const lightShadedGray = "#9b9b9b";
const grayTitleText = "#4a4a4a";

const lightGray = "#D6D6D6";
const disabledBtnBg = "#ccc";

const gray = "rgba(0,0,0,0.04)";
const gray1 = "#F5F7F8";
const cardBackground = "#f8f8f8";
const iconColor = "#AAAEB3";

const whiteColor = "#fff";
const offWhiteColor = "#fAFAFA";
const offWhite = "rgba(255,255,255,.60)";

const errorBgColor = "rgba(208,2,27,0.2)";
const githubBlack = "#333";
const black1 = "rgba(0,0,0,.87)";
const green = "#00C48C";

const darkOrange = "#AC5C2C";

const orange = "#F29132";
const orange1 = "#FFF8E7";
const RatingStarColor = "#FFC000";

const aqua = "#00C48C";

const errorRed = "#B00020";
const redBtnText = "#D0021B";

const theme = createMuiTheme({
  palette: {
    text: {
      primary: customBlue,
      white: whiteColor,
      customHoverBlue,
      disabledBtnBg,
      black1,
      darkShadedGray,
      mediumShadeGray,
      lightShadedGray,
      offWhiteColor,
      offWhite,
      green,
      purple,
      darkOrange,
      orange,
      orange1,
      aqua,
      lightGray,
      gray,
      gray1,
      cardBackground,
      iconColor,
      errorRed,
      RatingStarColor,
      grayTitleText,
      redBtnText,
    },
  },
  typography: {
    primary: {
      main: ["OpenSans"],
    },
    secondary: {
      main: ["Raleway"],
    },
    tertiary: {
      main: ["Roboto"],
    },
    fontweight: 600,
  },
  backgroundColor: {
    blue: customBlue,
    red: errorBgColor,
    white: whiteColor,
    githubBlack,
  },
});

export default theme;
