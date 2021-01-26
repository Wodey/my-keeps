import React, {useContext} from 'react';
import {Redirect, Route} from "react-router-dom";
import {useStore} from "./contextProvider";

export default function PrivateRoute ({component:Component, ...rest}) {
  const {user} = useStore();

  return <Route {...rest} render={routeProps => (
    user ? <Component {...routeProps} /> : <Redirect to="/login" />
  )} />
};
