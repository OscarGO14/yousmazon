import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { auth } from './firebase'
import { useStateValue } from "./StateProvider";


function App() {
  const [{ }, dispatch] = useStateValue()

  useEffect(() => {
    //Only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>', authUser)

      if (authUser) {
        //the user just logged in/ the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
