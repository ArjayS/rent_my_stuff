import React, { useContext, useEffect } from "react";
import ImageOne from "../images/shirt_image.jpg";
import ItemFinder from "../apis/ItemFinder";
import { RentMyStuffContext } from "../context/RentMyStuffContext";
import StarRating from "./StarRating";
import { useNavigate } from "react-router-dom";

const GeneraltemsList = (props) => {
  const { items, setItems } = useContext(RentMyStuffContext);

  let navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ItemFinder.get("/");

        setItems(response.data.data.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const renderRating = (item) => {
    if (!item.count) {
      return (
        <span className="text-sm font-medium text-gray-700">0 reviews</span>
      );
    }
    return (
      <>
        <h3 className="text-sm font-medium text-gray-700">
          <a href="#">
            <span aria-hidden="true" className="absolute inset-0"></span>(
            {item.count}) reviews
          </a>
        </h3>
        <StarRating key={item.id} rating={item.average_rating} />
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
            {items &&
              items.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="group relative"
                    onClick={() => handleItemSelect(item.id)}
                  >
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                      <img
                        src={ImageOne}
                        alt="Front of men&#039;s Basic Tee in black."
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href="#">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            ></span>
                            {item.item_name}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.item_location}
                        </p>
                        <div className="mt-1 text-sm text-gray-900">
                          <p className="mt-1 text-sm text-gray-900">
                            Price: ${item.item_base_price}
                          </p>
                        </div>
                      </div>
                      <div>
                        {renderRating(item)}
                        {/* <h3 className="text-sm text-gray-700">
                          <a href="#">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            ></span>
                            {item.average_rating}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm font-medium text-gray-900">
                          ({item.count}) Reviews
                        </p> */}
                      </div>
                    </div>
                  </div>
                );
              })}

            {/* <!-- More products... --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneraltemsList;
