import React from "react"
import axios from "axios"
import StuffData from "../../api/StuffData"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"

export default function StuffItem(props){

  const [hasBids, setHasBids] = useState(false)

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await StuffData.get(`/items/${props.id}/bids`);
        let bids = response.data.data.item;
        if (bids.length > 0){
          setHasBids(true)
        }
      } catch (err) {}
    };
    
    fetchItemData();
  }, []);
  


  return(
        <div class="group relative">
          <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <img
                  src={props.image}
                  alt={props.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
          </div>
          <div class="mt-4 flex justify-between">
          <div>
          <h3 class="text-sm text-gray-700">          
             
              {props.name}
          </h3>
          <p class="max-w-[160px] whitespace-nowrap overflow-hidden text-ellipsis mt-1 text-sm text-gray-500">{props.description}</p>
        </div>
        <p class="text-sm font-medium text-gray-900">${props.price}</p>
      </div>
      {hasBids ? 
      <Link to={`/items/${props.id}/bids`}>
      <button type="submit" class="mt-10 flex items-center justify-center rounded-md border border-transparent bg-slate-900 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Item Bids</button>
      </Link> : 
      <button type="button" class="mt-10 flex items-center justify-center rounded-md border border-transparent bg-gray-200 py-3 px-8 text-base font-medium text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-not-allowed" disabled>No Bids</button>
      }

 
      <button onClick={()=> props.delete(props.id)} type="submit" class="mt-10 flex items-center justify-center rounded-md border border-transparent bg-rose-600 py-3 px-8 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Delete</button>
      
    </div>
  )
}