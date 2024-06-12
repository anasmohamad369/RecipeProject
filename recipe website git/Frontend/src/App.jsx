import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sign from "../Signup/Sign1";
import Login from "../Signup/Login";
import Nav from "./Nav1.jsx";
import Home from "./Home.jsx";
import Create from "./Create.jsx"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sign1 from "../Signup/Sign1";
import { Own } from "./Own.jsx";
import Recipedet from "./Recipedet.jsx";
import { Otp } from "./Otp.jsx";
import { About } from "./About.jsx";


let App = () => {
  return (
    <>
      <BrowserRouter>
        
    <ToastContainer/>

        <Routes>
          <Route path="/" element={<Sign/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Sign />} />
          <Route path="/own" element={<Own />} />
          <Route path="/recipe-detail/:id" element={<Recipedet/>}/>
          <Route path="/otp" element={<Otp/>}/>
          <Route path="/about" element={<About/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;