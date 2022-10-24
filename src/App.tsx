import { useReactiveVar } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkModeVar, isLoggendInVar } from "./screens/apollo";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/Notfound";
import SignUp from "./screens/SignUp";
import { darkTheme, GlobalStyles, lightTheme } from './screens/styles';


function App() {
  const isLoggendIn = useReactiveVar( isLoggendInVar );
  const darkMode = useReactiveVar( darkModeVar );

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          {
            isLoggendIn ? 
            <Route path="/" element={ <Home/>  } />
          :
            <Route path="/" element={ <Login/>  } />
          }
          {
            !isLoggendIn ? 
            <Route path="/sign-up" element={ <SignUp />  } />
            : 
            null
          }
          <Route path="*" element={ <NotFound />  } />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
