import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ContextProvider from "./contextProvider";
import "./firebase";


function App() {
  return (
    <div className="App">
    <ContextProvider>
      <Router>
        <Switch>
          <PrivateRoute component={Dashboard} path="/" exact />
          <Route path="/login">
              <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          </Switch>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
