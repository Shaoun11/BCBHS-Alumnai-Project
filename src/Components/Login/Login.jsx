/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */

import { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Authcontext } from "../../Authprovider/Authprovider";
import toast from "react-hot-toast";



const Login = () => {


       
      

        const { userlogin } = useContext(Authcontext);

        const location = useLocation();
        const navigate = useNavigate();
        console.log("location i n the login page", location);

        const handelLogin = (e) => {
          e.preventDefault();
          console.log(e.currentTarget);
          const form = new FormData(e.currentTarget);

          const email = form.get("email");
          const password = form.get("password");

          console.log(email, password);
          userlogin(email, password)
            .then((userCredential) => {
              const user = userCredential.user;
            toast.success('Login Successfully!')
            navigate(location?.state? location?.state:('/'))
            console.log(user);
              e.target.reset();

              navigate(location?.state ? location.state : "/");
            })

            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              toast.error("Login failed,please try again!")
              console.log(errorMessage);
              console.log(errorCode);
            });
        };
       
     


    return (
      <div className=" ">
        <div
          className="flex h-screen  w-full items-center justify-center bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/x6J9CzH/12052022-120822-Time-To-Fly-by-Ayan-overlay.jpg')",
          }}
        >
          <div className="rounded-xl  bg-opacity-50 px-16 py-14 shadow-lg backdrop-blur-md  max-sm:px-8">
            <div className="flex flex-row mx-auto">
              <button
                type="button"
                className="  text-black  border-gray-500 py-2  px-3 shadow-lg rounded-lg"
              >
                <NavLink to="/">
                  {" "}
                  <div className="flex flex-row align-middle mr-5">
                    <svg
                      className="w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>{" "}
                    <p className="ml-2 text-black">Back</p>
                  </div>{" "}
                </NavLink>
              </button>
            </div>

            <div className="text-white">
              <div className="mb-8 flex flex-col items-center">
                <img
                  src="https://i.ibb.co/0nShLXT/Community-Logo-1.png"
                  width="150"
                  alt=""
                  srcset=""
                />
                <h1 className=" text-4xl font-bold">BCBHS </h1>
                <h1 className="mb-1">Alumni Association</h1>
                <span className="text-gray-300">Enter Login Details</span>
              </div>
              <form onSubmit={handelLogin}>
                <div className="mb-4 text-lg">
                  <input
                    className="rounded-3xl border-none bg-gray-700 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                    type="text"
                    name="email"
                    placeholder="Type email here"
                  />
                </div>

                <div className="mb-4 text-lg">
                  <input
                    className="rounded-3xl border-none bg-gray-700 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                    type="Password"
                    name="password"
                    placeholder="*********"
                  />
                </div>
                <div className="mt-8 flex justify-center text-lg text-black">
                  <button
                    type="submit"
                    className="rounded-3xl bg-gray-700 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
                  >
                    Login
                  </button>
                </div>
                <p className="text-sm mt-2 leading-relaxed text-grey-900">
                  Not registered yet?{" "}
                  <Link to="/register">
                    {" "}
                    <a
                      href="javascript:void(0)"
                      className="font-bold text-purple-blue-500"
                    >
                      <span className="text-yellow-500">Create an Account</span>
                    </a>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;