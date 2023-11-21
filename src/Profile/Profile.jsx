/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import { FacebookIcon } from "react-share";


const Profile = () => {


     const data = useLoaderData();
     console.log(data);
     const {
	_id,
	name,
		sscbatch,
		roll,
		phone,
		blood,
	district,
	fbUrl,
	linkedinUrl,
profession,
currentJob,
	jobRole,
	pastJob,
	pastJobRoll,
		email,

		image

     } = data;

     console.log(data);

    return (
      <div>
        <div className="h-full bg-gray-200 p-8">
          <div className="w-full h-[250px]">
            <img
              src="https://i.ibb.co/x6J9CzH/12052022-120822-Time-To-Fly-by-Ayan-overlay.jpg"
              className="w-full h-full rounded-tl-lg rounded-tr-lg object-cover"
            />
          </div>
          <div className="flex flex-col items-center -mt-20">
            <img
              src={image}
              className="w-40 h-40 border-4 border-white rounded-full"
            />
            <div className="flex items-center space-x-2 mt-2">
              <p className="text-2xl">{name}</p>
              <span className="bg-blue-500 rounded-full p-1" title="Verified">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-100 h-2.5 w-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </span>
            </div>
            <p className="text-gray-700">SSC Batch:{sscbatch}</p>
            <p className="text-sm text-gray-500">{profession}</p>
          </div>
          <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2"></div>
        </div>
        <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
          <div className="w-full flex flex-col 2xl:w-1/3">
            <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
              <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
              <ul className="mt-2 text-gray-700">
                <li className="flex border-y py-2">
                  <span className="font-bold w-28">Full name</span>{" "}
                  <span className="font-bold mx-3">: </span>
                  <span className="text-gray-700">{name}</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-28">SSC Batch</span>{" "}
                  <span className="font-bold mx-3">: </span>
                  <span className="text-gray-700">{sscbatch}</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-28">Last Roll </span>{" "}
                  <span className="font-bold mx-3">: </span>
                  <span className="text-gray-700">{roll}</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-28">Mobile</span>{" "}
                  <span className="font-bold mx-3">: </span>
                  <span className="text-gray-700">{phone}</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-28">Email</span>
                  <span className="font-bold mx-3">: </span>
                  <span className="text-gray-700  "> {email}</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-28">District </span>{" "}
                  <span className="font-bold mx-3">: </span>
                  <span className="text-gray-700">{district}</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-28">Blood Group</span>{" "}
                  <span className="font-bold mx-3">: </span>
                  <span className="text-gray-700">{blood}</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-28">Profession</span>{" "}
                  <span className="font-bold mx-3">: </span>
                  <span className="text-gray-700">{profession}</span>
                </li>
              { profession !== "Student"  &&  <div>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-28">Current Job</span>{" "}
                    <span className="font-bold mx-3">: </span>
                    <span className="text-gray-700">{currentJob}</span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-28">Job Roll</span>{" "}
                    <span className="font-bold mx-3">: </span>
                    <span className="text-gray-700">{jobRole}</span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-28">Previous Job</span>{" "}
                    <span className="font-bold mx-3">: </span>
                    <span className="text-gray-700">{pastJob}</span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-28">Job Roll</span>{" "}
                    <span className="font-bold mx-3">: </span>
                    <span className="text-gray-700">{pastJobRoll}</span>
                  </li>{" "}
              </div>}
                <li className="flex items-center border-b py-2 space-x-2">
                  <span className="font-bold w-28">Social </span>{" "}
                  <span className="font-bold mx-3"> :</span>
                  <a href={fbUrl} title="Facebook">
                    <FacebookIcon className="w-5 rounded-full h-5"></FacebookIcon>
                  </a>
                  <a href={linkedinUrl} title="LinkedIn">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 333333 333333"
                      shape-rendering="geometricPrecision"
                      text-rendering="geometricPrecision"
                      image-rendering="optimizeQuality"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path
                        d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-18220 138885h28897v14814l418 1c4024-7220 13865-14814 28538-14814 30514-1 36157 18989 36157 43691v50320l-30136 1v-44607c0-10634-221-24322-15670-24322-15691 0-18096 11575-18096 23548v45382h-30109v-94013zm-20892-26114c0 8650-7020 15670-15670 15670s-15672-7020-15672-15670 7022-15670 15672-15670 15670 7020 15670 15670zm-31342 26114h31342v94013H96213v-94013z"
                        fill="#0077b5"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Profile;