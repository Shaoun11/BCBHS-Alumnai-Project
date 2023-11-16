/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";


const Login = () => {
    return (
      <div>
        <div
          className="flex h-screen  w-full items-center justify-center bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/x6J9CzH/12052022-120822-Time-To-Fly-by-Ayan-overlay.jpg')",
      
          }}
        >
          <div className="rounded-xl  bg-opacity-50 px-16 py-14 shadow-lg backdrop-blur-md max-sm:px-8">
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
              <form >
                <div className="mb-4 text-lg">
                  <input
                    className="rounded-3xl border-none bg-yellow-200 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                    type="text"
                    name="name"
                    placeholder="Type email here"
                  />
                </div>

                <div className="mb-4 text-lg">
                  <input
                    className="rounded-3xl border-none bg-yellow-200 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                    type="Password"
                    name="name"
                    placeholder="*********"
                  />
                </div>
                <div className="mt-8 flex justify-center text-lg text-black">
                  <button
                    type="submit"
                    className="rounded-3xl bg-yellow-200 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
                  >
                    Login
                  </button>
                </div>
                <p className="text-sm leading-relaxed text-grey-900">
                  Not registered yet?{" "}
                  <Link to="/register">
                    {" "}
                    <a
                      href="javascript:void(0)"
                      className="font-bold text-purple-blue-500"
                    >
                      Create an Account
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