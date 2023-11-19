import axios from "axios";
import { useEffect, useState } from "react";
import Navber from "../Components/Navber/Navber";
import "./datacard.css"
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
      <div className="flex items-center justify-center">
	<div className="container">
		<table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
        <thead className="text-white">
				<tr className="bg-red-400 flex md:visible hidden flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
					<th className="p-3 text-left">Name</th>
					<th className="p-3 text-left">Batch</th>
					<th className="p-3 text-left">Email</th>
					
					<th className="p-3 text-left" width="140px">Last Roll</th>
					<th className="p-3 text-left" width="140px">Profession</th>
					<th className="p-3 text-left" width="140px">Social</th>
					<th className="p-3 text-left" width="110px">Actions</th>
				</tr>
				
			</thead>
                
                </table>
			</div>
			</div>
       
      
      </div>
   <div>
   {
                userdata.map(user=><DatabaseCard key={user?._id} data={user} ></DatabaseCard>)
            }
   </div>


        </>
  
      
       
    );
};

export default Database;