import React, { useContext } from "react";
import { RentMyStuffContext } from "../context/RentMyStuffContext";
import StarRatingInputComponent from "./StarRatingInputComponent";
import ItemReviewFinder from "../apis/ItemReviewFinder";

const WriteFormComponent = (props) => {
  const {
    starRatingInput,
    setStarRatingInput,
    textInput,
    setTextInput,
    addItemReview,
    verifiedStatus,
  } = useContext(RentMyStuffContext);

  const { id } = props;

  console.log("write item review form: ", verifiedStatus);

  const renterId = verifiedStatus.id;

  const handlePlaceItemReview = async (event) => {
    event.preventDefault();
    try {
      const response = await ItemReviewFinder.post(`/stuff/${id}`, {
        guest_id: renterId,
        item_rating: starRatingInput,
        item_message: textInput,
      });

      console.log(response.data.data.user);

      setTextInput("");
      setStarRatingInput("");

      addItemReview(response.data.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* <!-- comment form --> */}
      <div class="flex mx-auto items-center justify-center shadow-lg  mb-4 max-w-lg">
        <form class="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
          <div class="flex flex-wrap -mx-3 mb-6">
            <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">
              Overall Rating
              <StarRatingInputComponent />
            </h2>
            <div class="w-full md:w-full px-3 mb-2 mt-2">
              <textarea
                class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                name="body"
                placeholder="Type Your Comment"
                required
                value={textInput}
                onChange={(event) => setTextInput(event.target.value)}
              ></textarea>
            </div>
            <div class="w-full md:w-full flex items-start md:w-full px-3">
              <div class="-mr-1">
                <input
                  type="submit"
                  class="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                  value="Post Comment"
                  onClick={handlePlaceItemReview}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WriteFormComponent;
