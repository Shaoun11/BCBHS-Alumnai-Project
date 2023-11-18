import React from 'react';

const DatabaseCard = ({data}) => {
    const{name,image,profession,email,roll,sscbatch}=data;
    return (
        <div>
       {/* <table className="min-w-full leading-normal">
                      
                     
                           
                        <tbody className='bordere-e-2 border-collapse '>
                           
                           <tr>
                                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                  <div className="flex items-center">
                                                      <div className="flex-shrink-0 w-10 h-10">
                                                          <img className="w-full h-full rounded-full"
                                                              src={image}
                                                              alt="" />
                                                      </div>
                                                      <div className="ml-3">
                                                          <p className="text-gray-900 whitespace-no-wrap">
                                                            {name}
                                                          </p>
                                                      </div>
                                                  </div>
                                              </td>
                                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                  <p className="text-gray-900 whitespace-no-wrap">{sscbatch}</p>
                                              </td>
                                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                  <p className="text-gray-900 whitespace-no-wrap">
                                                      {email}
                                                  </p>
                                              </td>
                                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                  <span
                                                      className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                      <span aria-hidden
                                                          className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                      <span className="relative">{roll}</span>
                                                  </span>
                                              </td>
                                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                  <span
                                                      className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                      <span aria-hidden
                                                          className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                      <span className="relative">{profession}</span>
                                                  </span>
                                              </td>
                                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                  <span
                                                      className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                      <span aria-hidden
                                                          className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                      <span className="relative">Activo</span>
                                                  </span>
                                              </td>
                                          </tr>   
                                          
                                         </tbody>
                               
                            
                       
                    </table> */}
                    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
   
    <tbody>
      {/* row 1 */}
      <tr>
       
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          {sscbatch}
          <br/>

        </td>
        <td>{email}</td>
        <td>{roll}</td>
        <td>{profession}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
     
     
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default DatabaseCard;