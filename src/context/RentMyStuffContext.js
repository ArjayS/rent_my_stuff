import React, { useState, createContext, useEffect } from "react";
import ItemFinder from "../apis/ItemFinder";

export const RentMyStuffContext = createContext();

export const RentMyStuffContextProvider = (props) => {
  // Used in ItemsHomePage
  const [inputItems, setInputItems] = useState("");
  const [itemListDefault, setItemListDefault] = useState();
  const [itemsList, setItemsList] = useState([]);
  // Used in ItemDetailsPage
  const [selectedItem, setSelectedItem] = useState([]);
  // Used in StoreNavigationComponent
  const [showOptions, setShowOptions] = useState(false);
  // Used in Reservations
  const [reservationsList, setReservationsList] = useState([]);

  // Item Search feature <-----------------------------------------------------
  useEffect(() => {
    const fetchAllItemsData = async () => {
      try {
        const response = await ItemFinder.get("/");

        setItemsList(response.data.data.items);
        setItemListDefault(response.data.data.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllItemsData();
  }, []);

  const updateInputItems = async (inputItems) => {
    const filtered = itemListDefault.filter((itemDefault) => {
      return itemDefault.item_name
        .toLowerCase()
        .includes(inputItems.toLowerCase());
    });

    setInputItems(inputItems);
    setItemsList(filtered);
  };
  // <-------------------------------------------------------------------------

  const addReservation = (reservation) => {
    setReservationsList([...reservationsList, reservation]);
  };

  return (
    <RentMyStuffContext.Provider
      value={{
        itemsList: itemsList,
        setItemsList,
        inputItems: inputItems,
        setInputItems,
        itemListDefault: itemListDefault,
        setItemListDefault,
        updateInputItems: updateInputItems,
        selectedItem,
        setSelectedItem,
        showOptions,
        setShowOptions,
        reservationsList,
        setReservationsList,
        addReservation,
      }}
    >
      {props.children}
    </RentMyStuffContext.Provider>
  );
};
