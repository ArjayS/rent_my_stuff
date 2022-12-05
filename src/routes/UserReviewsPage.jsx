import React from "react";
import axios from "axios";
import StuffData from "../api/StuffData";
import { useEffect, useContext } from "react";
import { useState } from "react";
import UserReviewCard from "../components/My stuff/UserReviewCard";
import { useParams } from "react-router-dom";
import { RentMyStuffContext } from "../context/RentMyStuffContext";
import UserFinder from "../apis/UserFinder";
import StoreNavigationComponent from "../components/StoreNavigationComponent";

export default function UserReviewsPage (){

  const [reviews, setReviews] = useState([])
  let {id} = useParams();
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

  console.log("user id:", verifiedStatus)

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await StuffData.get(`/userreviews/renter/${verifiedStatus.id}`)
        setReviews(response.data.data.userReviews)
      } catch(err){}
    }

    fetchItemData();
  }, []);

  


  return(
    <>
    <StoreNavigationComponent />
        <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">
            Your Reviews:
          </h2>
    <UserReviewCard reviews={reviews} />
    </div>
    </>
  )
}