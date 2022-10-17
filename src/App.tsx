import { useReactiveVar } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { isLoggendInVar } from "./screens/apollo";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/Notfound";

function App() {
  const isLoggendIn = useReactiveVar( isLoggendInVar );
  return (
    <BrowserRouter>
      <Routes>
        {
          isLoggendIn ? 
          <Route path="/" element={ <Home/>  } />
        :
          <Route path="/" element={ <Login/>  } />
        }
				<Route path="*" element={ <NotFound />  } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
