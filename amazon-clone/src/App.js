import React, { useEffect } from "react"; 
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from "./Checkout"
import { useStateValue } from "./StateProvider";
import Login from "./Login";
import { auth } from "./firebase";


function App() {
  //listener to see who is signed in
  useEffect(() => {
    //run once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        //the user just logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [])
  const [{}, dispatch] = useStateValue();

  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Login">
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
    </Router>
    
  );
}

export default App;
