import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import StuffData from "../api/StuffData";
import MyListofStuff from "../components/My stuff/MyListOfStuff";
import StuffIRented from "../components/My stuff/StuffIRented";
import NewItemModal from "../components/My stuff/NewItemModal";

const PersonalUserPage = () => {
  const [itemData, setItemData] = useState([]);
  const [rentalData, setRentalData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await StuffData.get("/users/2/items");
        console.log(response.data.data.items);
        setItemData(response.data.data.items);
      } catch (err) {}
    };

    fetchItemData();
  }, []);

  useEffect(() => {
    const fetchRentalData = async () => {
      try {
        const response = await StuffData.get("/users/2/rented");
        console.log(response.data.data.items);
        setRentalData(response.data.data.items);
      } catch (err) {}
    };

    fetchRentalData();
  }, []);

  const handleClick = (e) => {
    setShowModal(true);
  };

  const closeModal = (value) => {
    setShowModal(value);
    console.log("show modal2", showModal);

    window.location.reload(false);
  };

  console.log("show modal1:", showModal);

  return (
    <>
      {showModal && <NewItemModal closeModal={closeModal} />}
      <div class="bg-white">
        <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">
            My Stuff
          </h2>
          {/* <form>
    <button type="submit" class="mt-10 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add item</button>
    </form> */}

          <button
            onClick={handleClick}
            class="mt-10 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add item
          </button>

          <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <MyListofStuff items={itemData} />
          </div>
        </div>

        <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">
            Stuff I've rented or want to rent
          </h2>
          <form>
            <button
              type="submit"
              class="mt-10 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Rent
            </button>
          </form>

          <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <StuffIRented items={rentalData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalUserPage;
