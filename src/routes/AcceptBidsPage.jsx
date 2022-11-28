import React from "react";
import BidsTable from "../components/My stuff/BidsTable";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import StuffData from "../api/StuffData";

export default function AcceptBidsPage(props){
  const [bidsList, setBidsList] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await StuffData.get(`/items/5/bids`)
        // console.log("bids:",response)
        setBidsList(response.data.data.item)
      } catch(err){}
    }

    fetchItemData();
  }, []);

  console.log("bids list:", bidsList)

  return(
    <>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">
            Bids
          </h2>
        </div>
        <div class="group relative">
          <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          </div>
          <div class="mt-4 flex justify-between">
          <div>
          <h3 class="text-sm text-gray-700">          
             
              {bidsList[0].item_name}
          </h3>
          </div>
          </div>
          </div>
      <div class="container mx-auto w-3/4">
      <BidsTable bids={bidsList}/>
      </div>
    </div>
    </>
  )
}