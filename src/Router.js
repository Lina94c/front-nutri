import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./views/Home";

// const Home = () => <h1>Home</h1>
// const Signup = () => <h1>Signup</h1>
// const Login = () => <h1>Login</h1>
// const Profile = () => <h1>Profile</h1>
// const ResourceDetail = () => <h1>ResourceDetail</h1>
// Alimentos
import Alimentos from './views/Alimentos'
//----------User----------

import Login from "./components/Login";
import SignUp from "./components/Signup";
import Footer from "./components/Footer";


const Router = () => (
    <BrowserRouter>
       <NavBar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
       
    </Switch>
    <Footer/>
    </BrowserRouter>
  );
  
  export default Router;
  