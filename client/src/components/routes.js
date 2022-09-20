import React from "react";
import Login from "../components/login";
import Signup from "../components/signup";
i
import {
  BrowserRouter as Router,Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";

const routes = () => {
  return (
    <>
    <Router>
      <Routes>
      
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
      </Routes>
    </Router>
    
  </>
  )
}

export default routes