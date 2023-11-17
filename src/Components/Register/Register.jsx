/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-target-blank */

import { useContext } from "react";
import { NavLink, Navigate, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Authprovider/Authprovider";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from "../../Firebase/firebase.config";


const Register = () => {



     const auth = getAuth(app);
     const provider = new GoogleAuthProvider();

     const { createUser, setUser } = useContext(AuthContext);

     const location = useLocation();
     const navigate = useNavigate();
     console.log("location i n the login page", location);

     const handelRegister = (e) => {
       e.preventDefault();

       console.log(e.currentTarget);

       const form = new FormData(e.currentTarget);

       const name = form.get("name");

       const sscbatch = form.get("sscbatch");

       const roll = form.get("roll");
       const phone = form.get("phone");

       const blood = form.get("blood");
       const district = form.get("district");
       const fbUrl = form.get("fbUrl");
       const linkedinUrl = form.get("linkedinUrl");
       const photourl = form.get("photourl");
       const profession = form.get("profession");
       const currentJob = form.get("currentJob");
       const jobRole = form.get("jobRole");
       const pastJob = form.get("pastJob");
       const pastJobRoll = form.get("pastJobRoll");
       const email = form.get("email");
       const password = form.get("password");

    //    console.log(
    //      name,
    //      sscbatch,
    //      roll,
    //      phone,
    //      blood,
    //      district,
    //      fbUrl,
    //      linkedinUrl,
    //      photourl,
    //      profession,
    //      currentJob,
    //      jobRole,
    //      pastJob,
    //      pastJobRoll,
    //      email,
    //      password
    //    );

       createUser(email, password)
         .then((result) => {
           const Toast = Swal.mixin({
             toast: true,
             position: "top-end",
             showConfirmButton: false,
             timer: 3000,
             timerProgressBar: true,
             didOpen: (toast) => {
               toast.addEventListener("mouseenter", Swal.stopTimer);
               toast.addEventListener("mouseleave", Swal.resumeTimer);
             },
           });

           Toast.fire({
             icon: "success",
             title: "Registration successful",
           });
             
                 const addData = {
                   name,
                   sscbatch,
                   roll,
                   phone,
                   blood,
                   district,
                   fbUrl,
                   linkedinUrl,
                   photourl,
                   profession,
                   currentJob,
                   jobRole,
                   pastJob,
                   pastJobRoll,
                   email,
                   password,
                 };
             
             
             
                fetch("http://localhost:5001/userData", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(addData),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    console.log(data);

                      if (data.insertedId) {
                        
                          setUser({...result.user,...addData})
                          
                      e.target.reset();
                      // eslint-disable-next-line no-undef
                      Swal.fire({
                        title: "success",
                        text: "Service Added Succesfully",
                        icon: "success",
                        confirmButtonText: "Thank you",
                      });
                    }
                  });
         
             
           e.target.reset();

           Navigate(location?.state ? location.state : "/");
         })
           .catch((error) => { });
         
         
     


            
    };

         
         
         
    




    return (
      <div
        className="flex   w-full items-center justify-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/x6J9CzH/12052022-120822-Time-To-Fly-by-Ayan-overlay.jpg')",
        }}
      >
        <div className="max-w-2xl mx-auto rounded-xl mt-10 mb-10 bg-opacity-50 px-20 py-5 shadow-lg backdrop-blur-md  max-sm:px-8">
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

          <div className="mb-8 flex flex-col items-center">
            <img
              src="https://i.ibb.co/0nShLXT/Community-Logo-1.png"
              width="150"
              alt=""
              srcset=""
            />
            <h1 className=" text-4xl font-bold">BCBHS Alumni Association</h1>
            <h1 className="mb-1"></h1>
          </div>

          <form onSubmit={handelRegister} >
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  SSC Batch
                </label>
                <input
                  type="text"
                  name="sscbatch"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="year"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  BCBHS Last Class Roll
                </label>
                <input
                  type="number"
                  name="roll"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="roll..."
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="01XXXXXXX"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  Blood Group
                </label>
                <input
                  type="text"
                  name="blood"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="blood group"
                  required
                />
              </div>

              <div>
                <label
                  for="company"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  District
                </label>
                <input
                  type="text"
                  name="district"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="district"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  Facebook Url
                </label>
                <input
                  type="url"
                  name="fbUrl"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="www.facebook.com/..."
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  Linkedin Url
                </label>
                <input
                  type="url"
                  name="linkedinUrl"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="www.facebook.com/..."
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  Photo Url
                </label>
                <input
                  type="text"
                  name="photourl"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  Profession
                </label>
                <input
                  type="text"
                  name="profession"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="profession"
                  required
                />
              </div>

              <small className="text-white  ">
                <span className=" text-red-500 ">*</span>If you are a student
                don't fill it
                <span className=" text-red-500">*</span>
              </small>
              <br />

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  Current Job Company
                </label>
                <input
                  type="text"
                  name="currentJob"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Job"
                 
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  Current Job Role
                </label>
                <input
                  type="text"
                  name="jobRole"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Job Role"
     
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  Past Job Company
                </label>
                <input
                  type="text"
                  name="pastJob"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="past Job"
  
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  Past Job Roll
                </label>
                <input
                  type="text"
                  name="pastJobRoll"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="past job roll"
       
                />
              </div>
            </div>
            <div className="mb-6">
              <label
              
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
                required
              />
            </div>

            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="remember"
                className="ml-2 text-sm font-medium text-gray-400"
              >
                I agree with the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  terms and conditions
                </a>
                .
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
};

export default Register;