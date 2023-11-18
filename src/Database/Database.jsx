import axios from "axios";
import { useEffect, useState } from "react";
import Navber from "../Components/Navber/Navber";
import DatabaseCard from "./DatabaseCard";

const Database = () => {
    const [userdata,setuserdata]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5001/userData')
        .then((res)=>{
            const userdata=res.data;
            setuserdata(userdata)
        })
    },[])
  
    console.log(userdata);
    return (
        <>
        <Navber></Navber>
         <div>
            <h1 className="md:text-5xl font-serif font-medium mt-5 mb-20 text-center">We are proud to be <span className="text-red-500">BCBHSIAN'S</span></h1>
         </div>
         <body className="antialiased font-sans bg-gray-200">
    <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
           
            <div className="my-2 flex sm:flex-row flex-col">
                <div className="flex flex-row mb-1 sm:mb-0">
                    <div className="relative">
                       
                        
                    </div>
                    <div className="relative">
                        <select
                            className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                            <option>Batch</option>
                            <option>1977</option>

                          
                        </select>
                        <div
                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="block relative">
                    <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                            <path
                                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                            </path>
                        </svg>
                    </span>
                    <input placeholder="Search"
                        className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                </div>
            </div>
       
            <div className="overflow-x-auto">
  <table className="table">
    
    <thead>
      <tr>
        
        <th>Name</th>
        <th>Batch</th>
        <th>Email</th>
        <th>Last Roll</th>
        <th>Profession</th>
        <th>Social</th>
      </tr>
    </thead>
    
    
    
  </table>
</div>
            
            {
                userdata.map(user=><DatabaseCard key={user?._id} data={user} ></DatabaseCard>)
            }
                    
        </div>
    </div>
</body>
         <div>
            
         </div>
        </>
  
      
       
    );
};

export default Database;