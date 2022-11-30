import React from "react";
import BidsTable from "../components/My stuff/BidsTable";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StuffData from "../api/StuffData";

export default function AcceptBidsPage(){
  const [bidsList, setBidsList] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemImage, setItemImage] = useState("");
  const [bidsStatus, setBidsStatus] = useState("")
  let{id} = useParams();


  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await StuffData.get(`/items/${id}/bids`)
        console.log("bids:",response)
        setBidsList(response.data.data.item)
        setItemName(response.data.data.item[0].item_name)
        setItemImage(response.data.data.item[0].item_image)
      } catch(err){}
    }

    fetchItemData();
  }, [bidsStatus]);


  const handleApproval = async (id, action) => {
    try {
      const response = await StuffData.patch(`reservations/reserve/${id}/approve`, {
        rsrv_approval: action,
      })
      setBidsStatus(action + id)
      console.log("response",response)
    } catch (err){

    }}

  console.log("item name:", itemName)
  console.log("bids list:", bidsList)

  return(
    <>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">
            Bids
          </h2>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{itemName}</h1>
        </div>
        <div class="group relative">
          <div class=" min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-white group-hover:opacity-75 lg:aspect-none lg:h-80">
          <img
                  src={itemImage}
                  alt={itemName}
                  className="h-full w-2/3 object-cover object-center lg:h-full "
                />
          </div>
          <div class="mt-4 flex justify-between">

          </div>
          </div>
      <div class="container mx-auto w-3/4">
      <BidsTable bids={bidsList} approval={handleApproval}/>
      </div>
    </div>
    </>
  )
}