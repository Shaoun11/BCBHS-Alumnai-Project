/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useEffect, useState } from "react";
import Navber from "../Components/Navber/Navber";
import "./datacard.css"
import DatabaseCard from "./DatabaseCard";
import { FiSearch } from "react-icons/fi";



const Database = () => {
    const [userdata,setuserdata]=useState([]);
    const [loader, setloader] = useState(true);

     
      const [search, setsearch] = useState("");

      const searchQuery = search.toLowerCase();

    useEffect(()=>{
        axios.get('http://localhost:5001/userData')
        .then((res)=>{
            const userdata=res.data;
            setuserdata(userdata)
            setloader(false)
        })
    },[])

    if (loader) {
        return <span className="loading text-red-500 ml-[750px] pt-[750px] justify-center flex loading-ring loading-lg"></span>
    }
  
    console.log(userdata);
    return (
      <>
        <Navber></Navber>

        <div>
          <div>
            <h1 className="md:text-5xl text-2xl text-center font-semibold mt-5 mb-16 ">
              Our <span className="text-red-500">Alumni</span> Database
            </h1>
            <div className=" flex justify-center mt-3 ">
              <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between  w-1/2 shadow-lg ">
                <input
                  className="text-base text-gray-400 flex-grow outline-none px-2 py-3"
                  onChange={(e) => setsearch(e.target.value)}
                  type="text"
                  name="search"
                  placeholder="Search by name"
                />
                <div className="ms:flex items-center px-2 py-1  rounded-lg space-x-4 mx-auto">
                  <FiSearch className="text-xl"></FiSearch>
                </div>
              </div>
            </div>
          </div>

          {/* search */}

          <div className="flex items-center justify-center">
            <div className="container">
              <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                <thead className="text-white">
                  <tr className="bg-red-400 flex md:visible hidden flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Batch</th>
                    <th className="p-3 text-left">Email</th>

                    <th className="p-3 text-left" width="140px">
                      Last Roll
                    </th>
                    <th className="p-3 text-left" width="140px">
                      Profession
                    </th>
                    <th className="p-3 text-left" width="100px">
                      Social
                    </th>
                    <th className="p-3 text-left" width="110px">
                      Details
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
        <div>
          {userdata
            .filter((item) => {
              return item.name.toLowerCase().includes(searchQuery);
            })
            .map((user) => (
              <DatabaseCard key={user?._id} data={user}></DatabaseCard>
            ))}
        </div>

        <div>
       
        </div>
      </>
    );
};

export default Database;