import React, { useContext } from "react";
import ReservationFinder from "../apis/ReservationFinder";
import { RentMyStuffContext } from "../context/RentMyStuffContext";

const ModalComponent = (props) => {
  const {
    addReservation,
    reservationStartDate,
    setReservationStartDate,
    reservationEndDate,
    setReservationEndDate,
    bidPrice,
    setBidPrice,
    verifiedStatus,
  } = useContext(RentMyStuffContext);

  const { visible, onClose, selectedItemName, selectedItemId } = props;

  const handleOnCloseModal = (event) => {
    if (event.target.id === "container") onClose();
  };

  if (!visible) return null;

  console.log("place bid modal form:", verifiedStatus);

  const renterId = verifiedStatus.id;

  // Accessing the route to POST new Bid
  const handlePlaceBidSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("Selected item id: ", selectedItemId);
      const response = await ReservationFinder.post(
        `/reserve/${selectedItemId}`,
        {
          guest_id: renterId,
          rsrv_start_date: reservationStartDate,
          rsrv_end_date: reservationEndDate,
          rsrv_price_bid: bidPrice,
        }
      );

      console.log(response.data.data.item);

      setReservationStartDate("");
      setReservationEndDate("");
      setBidPrice("");
      onClose();

      // Haven't seen the get all of reservations
      addReservation(response.data.data.item);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      id="container"
      onClick={handleOnCloseModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-2 rounded w-72">
        <h1 className="font-semibold text-center text-xl text-gray-700"></h1>
        <p className="text-center text-gray-700 mb-5">
          {" "}
          Place a bid: {selectedItemName}
        </p>

        <div className="flex flex-col">
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="Start Date"
            value={reservationStartDate}
            onChange={(event) => setReservationStartDate(event.target.value)}
          />
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="End Date"
            value={reservationEndDate}
            onChange={(event) => setReservationEndDate(event.target.value)}
          />
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="Bid Price"
            value={bidPrice}
            onChange={(event) => setBidPrice(event.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            onClick={handlePlaceBidSubmit}
            className="px-5 py-2 bg-gray-700 text-white rounded"
          >
            Create Bid
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
