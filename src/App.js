import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Home } from "./components/home";
import { Login } from "./components/login";
import { SignUp } from "./components/signUp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
