import React from "react";

const ModalComponent = (props) => {
  const { visible, onClose, item_name } = props;

  const handleOnCloseModal = (event) => {
    if (event.target.id === "container") onClose();
  };

  if (!visible) return null;

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
          Place a bid: {item_name}
        </p>

        <div className="flex flex-col">
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="Start Date"
          />
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="End Date"
          />
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="Bid Price"
          />
        </div>
        <div className="text-center">
          <button className="px-5 py-2 bg-gray-700 text-white rounded">
            Create Bid
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
