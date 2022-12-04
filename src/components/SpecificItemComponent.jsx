import React, { useContext, useEffect, useState } from "react";
import { RentMyStuffContext } from "../context/RentMyStuffContext";
import ItemFinder from "../apis/ItemFinder";
import StarRatingComponent from "../components/StarRatingComponent";
import ModalComponent from "../components/ModalComponent";

const SpecificItemComponent = (props) => {
  const { selectedItem, setSelectedItem, verifiedStatus } =
    useContext(RentMyStuffContext);

  const [showModalComponent, setShowModalComponent] = useState(false);

  const { id } = props;

  console.log("specific item: ", verifiedStatus);

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await ItemFinder.get(`/${id}/item`);
        // console.log(response.data.data.item);
        setSelectedItem(response.data.data.item);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItemData();
  }, []);

  const renderRating = (selectedItem) => {
    if (!selectedItem.count) {
      return (
        <span className="text-sm font-medium text-gray-700">0 reviews</span>
      );
    }
    return (
      <>
        <h3 className="text-sm font-medium text-gray-700">
          <span>
            <span aria-hidden="true" className="inset-0"></span>
            {selectedItem.count} reviews
          </span>
        </h3>
        <StarRatingComponent key={id} rating={selectedItem.average_rating} />
        <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          {selectedItem.average_rating} out of 5
        </p>
      </>
    );
  };

  const handleClickModal = (event) => {
    event.preventDefault();
    setShowModalComponent(true);
  };

  const handleOnCloseModal = () => {
    setShowModalComponent(false);
  };

  return (
    <div>
      <h1 className="mt-10 text-3xl font-bold underline">Item Details Page</h1>
      {/* <!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
--> */}
      <div class="bg-white">
        <div class="pt-6">
          {/* <!-- Image gallery --> */}
          <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div class="aspect-w-3 aspect-h-3 hidden overflow-hidden rounded-lg lg:block">
              <img
                src={selectedItem.item_image}
                alt={selectedItem.item_descrpition}
                class="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* <!-- Product info --> */}
          <div class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {selectedItem.item_name}
              </h1>
            </div>

            {/* <!-- Options --> */}
            <div class="mt-4 lg:row-span-3 lg:mt-0">
              <h2 class="sr-only">Product information</h2>
              <p class="text-3xl tracking-tight text-gray-900">
                ${selectedItem.item_base_price} / day
              </p>

              {/* <!-- Reviews --> */}
              <div>{renderRating(selectedItem)}</div>

              <div>
                <p>Owned by: {selectedItem.owner_name}</p>
              </div>

              <form class="mt-10">
                {/* Button: Place a Bid */}
                <button
                  type="submit"
                  class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={handleClickModal}
                >
                  Place a bid
                </button>
              </form>

              <ModalComponent
                selectedItemId={id}
                selectedItemName={selectedItem.item_name}
                onClose={handleOnCloseModal}
                visible={showModalComponent}
              />
            </div>

            <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
              {/* <!-- Description and details --> */}
              <div>
                <h3 class="sr-only">Description</h3>

                <div class="space-y-6">
                  <p class="text-base text-gray-900">
                    {selectedItem.item_description}
                  </p>
                </div>
              </div>

              {/* <div class="mt-10">
                <h3 class="text-sm font-medium text-gray-900">Location</h3>
                <p>{selectedItem.item_location}</p>
              </div> */}

              <div class="mt-10">
                <h2 class="text-sm font-medium text-gray-900">Availability</h2>

                <div class="mt-4 space-y-6">
                  <p class="text-sm text-gray-600">
                    {
                      (selectedItem.item_status = true ? (
                        <p>Currently reserved</p>
                      ) : (
                        <p>Available for Rent</p>
                      ))
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificItemComponent;
