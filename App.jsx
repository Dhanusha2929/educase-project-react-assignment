import "./App.css";
import {BrowserRouter, Routes , Route} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Profile from "./pages/Profile";
function App(){
  return ( <BrowserRouter>
           <Routes>
            <Route path = "/" element={<Welcome / >} />
            <Route path = "/login" element={<Login / >} />
            <Route path = "/createaccount" element={<CreateAccount / >} />
            <Route path = "/profile" element={<Profile / >} />

           </Routes>
          </BrowserRouter> );
}

export default App;
