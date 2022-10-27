import { createGlobalStyle } from "styled-components"
import { reset } from 'styled-reset';

declare module "styled-components" {
    interface DefaultTheme {
        accent: string;
        borderColor: string;
        bgColor: string;
        fontColor: string;
    }
}

export const lightTheme = {
  accent: '#0095f6',
  borderColor: 'rgb(219, 219, 219)',
  bgColor: "#FAFAFA",
  fontColor: "rgb(38, 38, 38)",
}

export const darkTheme = {
  accent: "gray",
  borderColor: "gray",
  bgColor: "#222",
  fontColor: "white",
}



export const GlobalStyles = createGlobalStyle`
${reset};
    body {
        background-color:${(props) => props.theme.bgColor};
        font-size:14px;
        font-family:'Open Sans', sans-serif;
        color:${(props) => props.theme.fontColor};
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