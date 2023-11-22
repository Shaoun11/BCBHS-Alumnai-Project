/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../Authprovider/Authprovider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(Authcontext);
  const location = useLocation();
  console.log(location.pathname);

  if (loading) {
    return (
      <div class="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen">
        <div class="flex space-x-2 animate-pulse">
          <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
        </div>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
