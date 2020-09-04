import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';


//react runter
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

//Fire base
import firebase from "firebase/app"
import "firebase/auth"

//Components

import Home from "./pages/Home"
import Signin from "./pages/Sginin"
import Signup from "./pages/SignUp"
import PageNotFound from "./pages/PageNotFound"
import { UserContext } from './Context/UserContext';
import Footer from './LayOut/Footer';
import Header from './LayOut/Header';

import firebaseConfig from "./Congig/FireBaseconfig"
//init firebase
firebase.initializeApp(firebaseConfig)

const App = () => {

  const [user, setUser] = useState(null)
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Signin" component={Signin} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="*" component={PageNotFound} />

        </Switch>
        <Footer></Footer>
      </UserContext.Provider>

    </Router>
  );
}

export default App;
