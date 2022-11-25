import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import StuffData from "../api/StuffData";
import MyStuff from "../components/MyStuff";

const PersonalUserPage = () => {

  const [itemData, setItemData] = useState([])
  const [rentalData, setRentalData] = useState([])

  useEffect(()=>{
    const fetchItemData = async () => {
      try {
        const response = await StuffData.get("/users/2/items")
        console.log(response.data.data.items)
        setItemData(response.data.data.items)
      } catch(err){}
    }

    fetchItemData()
  },[])

  useEffect(()=>{
    const fetchRentalData = async () => {
      try {
        const response = await StuffData.get("/users/2/rented")
        console.log(response.data.data.items)
        setRentalData(response.data.data.items)
      } catch(err){}
    }

    fetchRentalData()
  },[])

  const items = itemData.map((data,id)=>{
    return<div key={id}>
        <div class="group relative">
          <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          </div>
          <div class="mt-4 flex justify-between">
          <div>
          <h3 class="text-sm text-gray-700">
            <a href="#">
              <span aria-hidden="true" class="absolute inset-0"></span>
              {data.item_name}
            </a>
          </h3>
          <p class="mt-1 text-sm text-gray-500">{data.item_description}</p>
        </div>
        <p class="text-sm font-medium text-gray-900">${data.item_base_price}</p>
      </div>
      <form>
      <button type="submit" class="mt-10 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Item Bids</button>
      </form>
      <form>
      <button type="submit" class="mt-10 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Rented</button>
      </form>
    </div>
    </div>
  })

  const rentals = rentalData.map((data,id) => {
    return<div key={id}>
    <div class="group relative">
      <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
      </div>
      <div class="mt-4 flex justify-between">
      <div>
      <h3 class="text-sm text-gray-700">
        <a href="#">
          <span aria-hidden="true" class="absolute inset-0"></span>
          {data.item_id}
        </a>
      </h3>
      <p class="mt-1 text-sm text-gray-500">{data.rsrv_approvald}</p>
    </div>
    <p class="text-sm font-medium text-gray-900">${data.rsrv_price_bid}</p>
  </div>
  <form>
  <button type="submit" class="mt-10 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Leave review</button>
  </form>
</div>
</div>
  })

  return(
  <>
   <div class="bg-white">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">My Stuff</h2>
    <form>
    <button type="submit" class="mt-10 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add item</button>
    </form>
    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    {items}
    </div>
   </div>

   <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">Stuff I've rented or want to rent</h2>
    <form>
    <button type="submit" class="mt-10 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Rent</button>
    </form>
    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    {rentals}
    </div>
   </div>
   </div>
  </>
    
  );

};

export default PersonalUserPage;
