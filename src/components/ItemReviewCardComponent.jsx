import React, { useContext, useEffect } from "react";
import { RentMyStuffContext } from "../context/RentMyStuffContext";
import StarRatingComponent from "./StarRatingComponent";
import ItemReviewFinder from "../apis/ItemReviewFinder";

const ItemReviewCardComponent = (props) => {
  const { itemReviewList, setItemReviewList } = useContext(RentMyStuffContext);

  const { id } = props;

  useEffect(() => {
    const fetchItemReviewsData = async () => {
      try {
        const response = await ItemReviewFinder.get(`/stuff/${id}`);

        setItemReviewList(response.data.data.itemReviews);
        console.log(response.data.data.itemReviews);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItemReviewsData();
  }, []);

  return (
    <div>
      {itemReviewList.map((itemReview) => {
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
                          src={itemReview.renter_image}
                          alt=""
                        />
                      </div>
                      <div class="text-white text-sm font-semibold">
                        {itemReview.renter_name}{" "}
                      </div>
                    </div>
                  </div>
                  <div class="flex mt-2">
                    <StarRatingComponent
                      key={id}
                      rating={itemReview.item_rating}
                    />
                  </div>
                  <p class="mt-4 text-md text-white">
                    {itemReview.item_message}
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

export default ItemReviewCardComponent;
