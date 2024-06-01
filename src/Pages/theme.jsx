// theme.js ou theme.ts
import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0em", // 0px
  sm: "30em", // 480px
  md: "48em", // 768px
  lg: "62em", // 992px
  xl: "86.875em", // 1390px
  '2xl': "120em", // 1920px
};

const theme = extendTheme({ breakpoints });

export default theme;
