import React, { useContext, useEffect } from "react";
import StarRatingComponent from "../StarRatingComponent"

const UserReviewCard = (props) => {
  
  console.log(props.reviews)

  return (
    <div>
      {props.reviews.map((userReview, id) => {
        return (
          <div class="bg-white flex items-center justify-center">
            <div class="px-10">
              <div class="my-4 bg-gray-800 w-[35rem] rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
                <div class="">
                  <div class="flex justify-between items-center">
                    <div class="flex items-center space-x-4">
                      <div class="">
                        <img
                          class="w-12 h-12 rounded-full"
                          src={userReview.owner_image}
                          alt=""
                        />
                      </div>
                      <div class="text-white text-sm font-semibold">
                        {userReview.owner_name}{" "}
                      </div>
                    </div>
                  </div>
                  <div class="flex mt-2">
                    <StarRatingComponent
                      key={id}
                      rating={userReview.rent_worthy}
                    />
                  </div>
                  <p class="text-sky-50 mt-4 text-md text-gray-600">
                    {userReview.rent_message}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserReviewCard;
