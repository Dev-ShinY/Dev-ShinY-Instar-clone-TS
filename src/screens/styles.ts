import { createGlobalStyle } from "styled-components"
import { reset } from 'styled-reset';

declare module "styled-components" {
    interface DefaultTheme {
        fontColor: string;
        bgColor: string;
    }
}

export const lightTheme = {
    fontColor: "#2c2c2c",
    bgColor: "white",
}

export const darkTheme = {
    fontColor: "white",
    bgColor: "#2c2c2c"
}



export const GlobalStyles = createGlobalStyle`
${reset};
    body {
        background-color: #FAFAFA;
        font-size:14px;
        font-family:'Open Sans', sans-serif;
    }
    a {
      text-decoration: none;
    }
    input {
      all:unset;
    }
    * {
      box-sizing:border-box;
    }
`;