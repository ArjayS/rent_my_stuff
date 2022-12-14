import React from "react";
import BidsTable from "../components/My stuff/BidsTable";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import StuffData from "../api/StuffData";
import UserReviewModal from "../components/My stuff/UserReviewModal";
import StoreNavigationComponent from "../components/StoreNavigationComponent";
import { RentMyStuffContext } from "../context/RentMyStuffContext";
import UserFinder from "../apis/UserFinder";

export default function AcceptBidsPage() {
  const [bidsList, setBidsList] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemImage, setItemImage] = useState("");
  const [bidsStatus, setBidsStatus] = useState("");
  const [rentalType, setRentalType] = useState("Approved");
  const [showModal, setShowModal] = useState(false);
  const [renter, setRenter] = useState([]);
  const [itemId, setItemId] = useState([]);
  let { id } = useParams();
  const [approvedCount, setApprovedCount] = useState(0);

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
  });

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await StuffData.get(`/items/${id}/bids`);
        console.log("bids:", response);
        setBidsList(response.data.data.item);
        setItemName(response.data.data.item[0].item_name);
        setItemImage(response.data.data.item[0].item_image);
      } catch (err) {}
    };

    fetchItemData();
    

  }, [bidsStatus]);

  const handleApproval = async (id, action) => {
    try {
      const response = await StuffData.patch(
        `reservations/reserve/${id}/approve`,
        {
          rsrv_approval: action,
        }
      );
      setBidsStatus(action + id);
      console.log("response", response);
    } catch (err) {}
  };

  console.log("item name:", itemName);
  console.log("bids list:", bidsList);

  const handleRental = (type) => {
    setRentalType(type);
  };

  const handleClick = (e) => {
    setShowModal(true);
    setRenter(e.guest_id);
    setItemId(e.item_id);
    console.log("modal info:", e);
  };

  const closeModal = (value) => {
    setShowModal(value);
  };

  return (
    <>
      <StoreNavigationComponent />
      <div class="bg-white">
        <div class="mx-auto w-3/4 py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">Bids</h2>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {itemName}
          </h1>
        </div>
        <div class="w-3/4 group relative mx-auto ">
          <div class="flex item-center mb-10 min-h-80 aspect-w-1 aspect-h-1 w-3/4 overflow-hidden rounded-md bg-white group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img src={itemImage} alt={itemName} />
          </div>
        </div>
        <div class="container mx-auto w-3/4">
          <div class="mb-5 inline-flex rounded-md shadow-sm" role="group">
            <button
              onClick={() => handleRental("Approved")}
              type="button"
              class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-slate-900 focus:text-blue-700 "
            >
              <p class="text-base">&#128077;</p>
              &nbsp;Approved
            </button>
            <button
              onClick={() => handleRental("pending")}
              type="button"
              class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-slate-900 focus:text-blue-700 "
            >
              <p class="text-base">&#128528;</p>
              &nbsp;Pending
            </button>
            <button
              onClick={() => handleRental("Rejected")}
              type="button"
              class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-slate-900 focus:text-blue-700 "
            >
              <p class="text-base">&#128078;</p>
              &nbsp;Rejected
            </button>
          </div>

          <BidsTable
            bids={bidsList}
            approval={handleApproval}
            type={rentalType}
            openmodal={handleClick}
          />
        </div>
      </div>
      {showModal && (
        <UserReviewModal
          reviewer={verifiedStatus.id}
          renter={renter}
          item={itemId}
          closeModal={closeModal}
        />
      )}
    </>
  );
}
