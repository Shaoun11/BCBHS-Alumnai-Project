import { useLoaderData } from "react-router-dom";
import EventsCard from "./EventsCard";
import { useEffect, useState } from "react";

const Event = () => {
    const [data,setdata]=useState([]);
   useEffect(()=>{
    fetch("./Events.json")
    .then(res=>res.json())
    .then(data=>setdata(data))
   },[])
    return (
        <div>
            <h1 data-aos='fade-up' className="md:text-5xl text-3xl text-center font-semibold"> Our Latest <span className="text-red-500">Events</span>  </h1>

            <div  className='grid  lg:grid-cols-3 gap-7 mb-16 mt-20 max-w-6xl mx-auto md:grid-cols-2 grid-cols-1'>
            {data.map(event=><EventsCard key={event.id} events={event}></EventsCard>)}
            </div>
        </div>
    );
};

export default Event;