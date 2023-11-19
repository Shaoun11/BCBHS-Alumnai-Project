import { FaFacebook, FaLinkedin } from "react-icons/fa";
const DatabaseCard = ({data}) => {
    const{name,image,profession,email,roll,sscbatch,fbUrl,linkedinUrl}=data;
    return (
       <div>
        <body className="flex items-center justify-center">
	<div className="container">
		<table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden  sm:shadow my-1">
			<thead className="text-white">
				<tr className="bg-teal-400 flex md:hidden visible flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-3 sm:mb-0">
					<th className="p-[20px] text-left">Name</th>
					<th className=" p-[12px] text-left">Batch</th>
					<th className="p-[11px] text-left">Email</th>
					<th className="p-[11.5px] text-left">Last Roll</th>
					<th className="p-[11px] text-left" >Profession</th>
					<th className="p-[8px] text-left " >Social</th>
					<th className="p-3  text-left " >Details</th>
				</tr>
				
			</thead>
			<tbody className="flex-1 sm:flex-none">
            <tr className="flex flex-col  flex-no wrap sm:table-row mb-2 sm:mb-0">
					<td className="border-grey-light  md:w-[270px]  border hover:bg-gray-100 p-3">
                  <div className="flex  gap-3 font-semibold">
                  <div>
                  <img className="w-10 h-10 rounded-full" src={image} alt="User Data"/>
                  </div>
                    <h1 className="mt-[6px]">{name}</h1>
                  </div>
                        </td>
					<td className="border-grey-light md:w-[150px] border hover:bg-gray-100 p-3 truncate">{sscbatch}</td>
					<td className="border-grey-light md:w-[300px] border hover:bg-gray-100 p-3 truncate">{email}</td>
					<td className="border-grey-light border md:w-[150px] hover:bg-gray-100 p-3 truncate">{roll}</td>
					<td className="border-grey-light border md:w-[207px] hover:bg-gray-100  p-3 truncate">{profession}</td>
	
					<td className="border-grey-light border flex gap-2 text-lg flex-row  hover:bg-gray-100 p-3 truncate"> <FaFacebook className="text-blue-600" ></FaFacebook> <FaLinkedin  className="text-[#0a66c2] "></FaLinkedin> </td>
					<td className="border-grey-light border md:w-[100px] hover:bg-gray-100 p-3 truncate">Details</td>
					
				</tr>
				
			</tbody>
		</table>
	</div>
</body>
       </div>
    );
};

export default DatabaseCard;