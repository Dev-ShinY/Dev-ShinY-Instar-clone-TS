import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/Notfound";

function App() {
  const [isLoggendIn, setIsLoggendIn] = useState<boolean>(false);
  return (
    <BrowserRouter>
      <Routes>
        {
          isLoggendIn ? 
          <Route path="/" element={ <Home setIsLoggendIn={setIsLoggendIn}/>  } />
        :
          <Route path="/" element={ <Login setIsLoggendIn={setIsLoggendIn}/>  } />
        }
				<Route path="*" element={ <NotFound />  } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
