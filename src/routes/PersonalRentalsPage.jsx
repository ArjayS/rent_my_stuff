import React from "react";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import StuffData from "../api/StuffData";
import MyListofStuff from "../components/My stuff/MyListOfStuff";
import StuffIRented from "../components/My stuff/StuffIRented";
import NewItemModal from "../components/My stuff/NewItemModal";
import StoreNavigationComponent from "../components/StoreNavigationComponent";
import { RentMyStuffContext } from "../context/RentMyStuffContext";
import UserFinder from "../apis/UserFinder";

const PersonalUserPage = () => {

  const [rentalData, setRentalData] = useState([]);
  const [rentalType, setRentalType] = useState("Approved")
  const { verifiedStatus, setVerifiedStatus } = useContext(RentMyStuffContext);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await UserFinder.get("/login");

        if (response.data.loggedIn) {
          console.log("get request for /login:", response.data.data.user);
          setVerifiedStatus(response.data.data.user);
        } else {
          setVerifiedStatus("Nothing");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  })

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
    <StoreNavigationComponent />

      <div class="bg-white">
        

   <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">Stuff I've rented or want to rent</h2>
    <div class="my-9 inline-flex rounded-md shadow-sm" role="group">
  <button onClick={()=>handleRental("Approved")} type="button" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-slate-900 focus:text-blue-700 ">
    <p class="text-base">&#128077;</p>
    &nbsp;Approved
  </button>
  <button onClick={()=>handleRental("pending")} type="button" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-slate-900 focus:text-blue-700 ">
  <p class="text-base">&#128528;</p>
  &nbsp;Pending
  </button>
  <button onClick={()=>handleRental("Rejected")} type="button" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-slate-900 focus:text-blue-700 ">
  <p class="text-base">&#128078;</p>
  &nbsp;Rejected
  </button>
</div>
        
        <StuffIRented 
          items={rentalData}
          type={rentalType}
          />
        

   </div>
   </div>
  </>
    
  );
};

export default PersonalUserPage;
