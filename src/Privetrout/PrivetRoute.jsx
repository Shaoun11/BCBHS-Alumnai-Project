/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../Authprovider/Authprovider";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(Authcontext);
  const location = useLocation();
  console.log(location.pathname);

  if (loader) {
    return (
      <span className="loading text-red-500 ml-[750px] pt-[750px] justify-center flex loading-ring loading-lg"></span>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
