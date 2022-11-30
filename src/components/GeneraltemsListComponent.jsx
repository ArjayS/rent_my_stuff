import React, { useContext } from "react";
<<<<<<< HEAD:src/components/GeneraltemsListComponent.jsx
=======
// import ImageOne from "../images/shirt_image.jpg";
>>>>>>> main:src/components/GeneraltemsList.jsx
import { RentMyStuffContext } from "../context/RentMyStuffContext";
import StarRatingComponent from "./StarRatingComponent";
import { useNavigate } from "react-router-dom";

const GeneraltemsListComponent = () => {
  const { itemsList } = useContext(RentMyStuffContext);

  let navigate = useNavigate();

  const renderRating = (item) => {
    if (!item.count) {
      return (
        <span className="text-sm font-medium text-gray-700">0 reviews</span>
      );
    }
    return (
      <>
        <h3 className="text-sm font-medium text-gray-700">
          <span>
            <span aria-hidden="true" className="absolute inset-0"></span>
            {item.count} reviews
          </span>
        </h3>
        <StarRatingComponent key={item.id} rating={item.average_rating} />
        <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          {item.average_rating} out of 5
        </p>
      </>
    );
  };

  const handleItemSelect = (id) => {
    navigate(`/items/${id}/item`);
  };

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
            Browse Our Collections
          </h2>

          <div className="mt-20 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {/* CARD (VANILLA) NOT PROPPERLY DESIGNED YET */}
            {itemsList &&
              itemsList.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="group relative"
                    onClick={() => handleItemSelect(item.id)}
                  >
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                      <img
<<<<<<< HEAD:src/components/GeneraltemsListComponent.jsx
                        src={item.item_image}
=======
                        // src={ImageOne}
>>>>>>> main:src/components/GeneraltemsList.jsx
                        alt="Front of men&#039;s Basic Tee in black."
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <span>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            ></span>
                            {item.item_name}
                          </span>
                        </h3>
                        {/* <p className="mt-1 text-sm text-gray-500">
                          {item.item_location}
                        </p> */}
                        <div className="mt-1 text-sm text-gray-900">
                          <p className="mt-1 text-sm text-gray-900">
                            Price: ${item.item_base_price}
                          </p>
                        </div>
                      </div>
                      <div>{renderRating(item)}</div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneraltemsListComponent;
