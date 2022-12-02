import React from "react";
import axios from "axios";
import StuffData from "../api/StuffData";
import { useEffect } from "react";
import { useState } from "react";
import UserReviewCard from "../components/My stuff/UserReviewCard";
import { useParams } from "react-router-dom";

export default function UserReviewsPage (){

  const [reviews, setReviews] = useState([])
  let {id} = useParams();

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await StuffData.get(`/userreviews/renter/${id}`)
        // console.log("reviews:",response.data.data.userReviews)
        setReviews(response.data.data.userReviews)
      } catch(err){}
    }

    fetchItemData();
  }, []);

  


  return(
    <>
        <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">
            Your Reviews:
          </h2>
    <UserReviewCard reviews={reviews} />
    </div>
    </>
  )
}