/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { IoArrowForwardCircle } from "react-icons/io5";
import ShareLink from 'react-linkedin-share-link'
import { Link } from "react-router-dom";
import { FacebookIcon, FacebookShareButton, FacebookShareCount, LinkedinIcon, LinkedinShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";
const DatabaseCard = ({data}) => {
    const {
      _id,
      name,
      image,
      profession,
      email,
      roll,
      sscbatch,
      fbUrl,
      phone,
      linkedinUrl,
    } = data;
	const shareUrl=fbUrl;
	console.log(linkedinUrl);
	console.log(shareUrl);
	
    return (
      <div>
        <body className="flex items-center justify-center">
          <div className="container">
            <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden  sm:shadow my-1">
              <thead className="text-white">
                <tr className="bg-red-400 flex md:hidden visible flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-3 sm:mb-0">
                  <th className="p-[20px] text-left">Name</th>
                  <th className=" p-[12px] text-left">Batch</th>
                  <th className="p-[11px] text-left">Email</th>
                  <th className="p-[11px] text-left">Last Roll</th>
                  <th className="p-[11px] text-left">Profession</th>
                  <th className="p-[14px] text-left ">Social</th>
                  <th className="p-3  text-left ">Details</th>
                </tr>
              </thead>
              <tbody className="flex-1 sm:flex-none">
                <tr className="flex flex-col  flex-no wrap sm:table-row mb-2 sm:mb-0">
                  <td className="border-grey-light  md:w-[270px]  border hover:bg-gray-100 p-3">
                    <div className="flex  gap-3 font-semibold">
                      <div>
                        <img
                          className="w-10 h-10 rounded-full"
                          src={image}
                          alt="User Data"
                        />
                      </div>
                      <h1 className="mt-[6px]">{name}</h1>
                    </div>
                  </td>
                  <td className="border-grey-light md:w-[150px] border hover:bg-gray-100 p-3 truncate">
                    {sscbatch}
                  </td>
                  <td className="border-grey-light md:w-[300px] border hover:bg-gray-100 p-3 truncate">
                    {email}
                  </td>
                  <td className="border-grey-light border md:w-[150px] hover:bg-gray-100 p-3 truncate">
                    {roll}
                  </td>
                  <td className="border-grey-light border md:w-[207px] hover:bg-gray-100  p-3 truncate">
                    {profession}
                  </td>

                  <td className="border-grey-light border flex gap-2 text-lg flex-row   p-3 truncate">
                    {" "}
                  <a href={shareUrl} target="blank" >
                    
                  <FacebookIcon size={26} round />
                  </a>
                 
                    
                    <a href={linkedinUrl} target="blank">
                    <LinkedinIcon size={26} round />
                    </a>
                 
                  </td>
                  <td className="border-grey-light border md:w-[100px] hover   p-3 truncate">
                    {" "}
                    <Link to={`/profile/${_id}`}>
                      {" "}
                      <IoArrowForwardCircle className="md:ml-6 text-[27px] text-blue-950 "></IoArrowForwardCircle>
                    </Link>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </body>
      </div>
    );
};

export default DatabaseCard;