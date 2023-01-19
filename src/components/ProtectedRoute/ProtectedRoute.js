import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({component:Component, ...props}) => {
    const token = localStorage.getItem('token');
    return (
        <Route>
            {
                () => token?  <Component {...props} /> : <Redirect to="/"/>
            }
        </Route>
    )
}

export default ProtectedRoute;