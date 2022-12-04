import React, { useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import StuffData from "../api/StuffData";
import MyListofStuff from "../components/My stuff/MyListOfStuff";
import NewItemModal from "../components/My stuff/NewItemModal";
import { RentMyStuffContext } from "../context/RentMyStuffContext";
import UserFinder from "../apis/UserFinder";
import { useNavigate } from "react-router-dom";
import StoreNavigationComponent from "../components/StoreNavigationComponent";

const PersonalUserPage = () => {
  const [itemData, setItemData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  let navigate = useNavigate();

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

    const fetchItemData = async () => {
      try {
        const response = await StuffData.get(
          `/users/${verifiedStatus.id}/items`
        );
        console.log("items:", response.data.data.items);
        setItemData(response.data.data.items);
      } catch (err) {}
    };

    fetchItemData();
  }, []);

  const handleClick = (e) => {
    setShowModal(true);
  };

  const addItem = (item) => {
    setItemData([...itemData, item]);
  };

  const closeModal = (value, item) => {
    setShowModal(value);
    // console.log("show modal2", showModal);
    addItem(item);
    // window.location.reload(false);
  };

  const handleDelete = async (id) => {
    try {
      const response = await StuffData.delete(`items/${id}/item`);
      setItemData(
        itemData.filter((item) => {
          return item.id !== id;
        })
      );
    } catch (err) {}
  };

  return (
    <>
      <StoreNavigationComponent />
      {/* <h1 className="text-3xl font-bold underline">
        Home Page! Welcome, {verifiedStatus.user_name}
      </h1> */}
      {showModal && <NewItemModal closeModal={closeModal} />}
      <div class="bg-gray-50">
        <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">
            My Stuff
          </h2>

          <button
            onClick={handleClick}
            class="mt-10 flex items-center justify-center rounded-md border border-transparent bg-slate-900 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add item
          </button>

          <div class="whitespace-normal overflow-auto mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <MyListofStuff items={itemData} delete={handleDelete} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalUserPage;
