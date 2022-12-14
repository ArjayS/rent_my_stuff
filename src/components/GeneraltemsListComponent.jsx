import React, { useContext } from "react";
import { RentMyStuffContext } from "../context/RentMyStuffContext";
import StarRatingComponent from "./StarRatingComponent";
import { useNavigate } from "react-router-dom";
import SearchBarComponent from "./SearchBarComponent";

const GeneraltemsListComponent = () => {
  const { itemsList, updateInputItems, verifiedStatus } =
    useContext(RentMyStuffContext);

  console.log("general items: ", verifiedStatus);
  let navigate = useNavigate();

  const handleItemSelect = (id) => {
    navigate(`/items/${id}/item`);
    updateInputItems("");
  };

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-orange-500 mb-5">
            Find Stuff
          </h2>
          <SearchBarComponent />

          <div className="mt-20 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
            {/* CARD (VANILLA) NOT PROPPERLY DESIGNED YET */}
            {itemsList &&
              itemsList.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="group relative"
                    onClick={() => handleItemSelect(item.id)}
                  >
                    <div className=" min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                      <img
                        src={item.item_image}
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
                        <div className="mt-1 text-sm text-gray-900 mb-8">
                          <p className="mt-1 text-sm text-gray-900">
                            Price: ${item.item_base_price}
                          </p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-700">
                          <span>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            ></span>
                            {item.count ? `${item.count} reviews` : "0 reviews"}
                          </span>
                        </h3>
                        <StarRatingComponent
                          key={item.id}
                          rating={item.average_rating}
                        />
                        <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                          {item.average_rating
                            ? `${item.average_rating} out of 5`
                            : ""}
                        </p>
                      </div>
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
