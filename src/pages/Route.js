  
import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ isAuthenticated, children, ...props }) {
  return (
    <Route {...props}>
      {isAuthenticated ? children : <Redirect to="/401" />}
    </Route>
  );
}