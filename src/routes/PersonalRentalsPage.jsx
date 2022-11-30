import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import StuffData from "../api/StuffData";
import MyListofStuff from "../components/My stuff/MyListOfStuff";
import StuffIRented from "../components/My stuff/StuffIRented";
import NewItemModal from "../components/My stuff/NewItemModal";

const PersonalUserPage = () => {

  const [rentalData, setRentalData] = useState([]);
  const [rentalType, setRentalType] = useState("Approved")


  useEffect(() => {
    const fetchRentalData = async () => {
      try {
        const response = await StuffData.get("/users/2/rented")
        console.log("rentals:",response.data.data.items)
        setRentalData(response.data.data.items)
      } catch(err){}
    }

    fetchRentalData();
  }, []);

  const handleRental = (type) => {
    setRentalType(type)
  }

  return (
    <>
      <div class="bg-white">
        

   <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">Stuff I've rented or want to rent</h2>
    {/* <form>
    <button type="submit" class="mt-10 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Rent</button>
    </form> */}
    <div class="inline-flex rounded-md shadow-sm" role="group">
  <button onClick={()=>handleRental("Approved")} type="button" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ">
    <p class="text-base">&#128077;</p>
    &nbsp;Approved
  </button>
  <button onClick={()=>handleRental("pending")} type="button" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ">
  <p class="text-base">&#128528;</p>
  &nbsp;Pending
  </button>
  <button onClick={()=>handleRental("Rejected")} type="button" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ">
  <p class="text-base">&#128078;</p>
  &nbsp;Rejected
  </button>
</div>
    {
      rentalType === "Approved" && (
        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <h2>Approved Rentals</h2>
        <StuffIRented 
          items={rentalData}
          />
        </div>
        )
    }
    {
      rentalType === "pending" && (
        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <h2>Pending Rentals</h2>
        <StuffIRented 
          items={rentalData}
          />
        </div>
        )
    }
    {
      rentalType === "Rejected" && (
        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <h2>Rejected Rentals</h2>
        <StuffIRented 
          items={rentalData}
          />
        </div>
        )
    }

   </div>
   </div>
  </>
    
  );
};

export default PersonalUserPage;
