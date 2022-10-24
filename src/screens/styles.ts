import { createGlobalStyle } from "styled-components"
import { reset } from 'styled-reset';

declare module "styled-components" {
    interface DefaultTheme {
        accent: string;
        borderColor: string;
    }
}

export const lightTheme = {
  accent: '#0095f6',
  borderColor: 'rgb(219, 219, 219)',
}

export const darkTheme = {
  accent: "",
  borderColor: ""
}



export const GlobalStyles = createGlobalStyle`
${reset};
    body {
        background-color: #FAFAFA;
        font-size:14px;
        font-family:'Open Sans', sans-serif;
        color: rgb(38, 38, 38);
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