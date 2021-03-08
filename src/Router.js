import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./views/Home";

// const Home = () => <h1>Home</h1>
// const Signup = () => <h1>Signup</h1>
// const Login = () => <h1>Login</h1>
// const Profile = () => <h1>Profile</h1>
// const ResourceDetail = () => <h1>ResourceDetail</h1>

//----------User----------

import Login from "./components/Login";


const Router = () => (
    <BrowserRouter>
       <NavBar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
    </Switch>
    </BrowserRouter>
  );
  
  export default Router;
  