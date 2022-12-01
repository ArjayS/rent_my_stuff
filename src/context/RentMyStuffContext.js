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
  const [reservationStartDate, setReservationStartDate] = useState("");
  const [reservationEndDate, setReservationEndDate] = useState("");
  const [bidPrice, setBidPrice] = useState();
  // Will be replace later with proper routing with userId
  const [renter, setRenter] = useState();
  // Used in ItemReviewCardComponent
  const [itemReviewList, setItemReviewList] = useState([]);
  // Used in form input star rating for review POST
  const [starRatingInput, setStarRatingInput] = useState(null);
  const [starHover, setStarHover] = useState(null);
  const [textInput, setTextInput] = useState("");
  // Used in register and login page
  const [userEmailReg, setUserEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

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

  const addItemReview = (itemReview) => {
    setItemReviewList([...itemReviewList, itemReview]);
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
        reservationStartDate,
        setReservationStartDate,
        reservationEndDate,
        setReservationEndDate,
        bidPrice,
        setBidPrice,
        renter,
        setRenter,
        addReservation,
        itemReviewList,
        setItemReviewList,
        starRatingInput,
        setStarRatingInput,
        starHover,
        setStarHover,
        textInput,
        setTextInput,
        addItemReview,
        userEmailReg,
        setUserEmailReg,
        passwordReg,
        setPasswordReg,
        userEmail,
        setUserEmail,
        password,
        setPassword,
        loginStatus,
        setLoginStatus,
      }}
    >
      {props.children}
    </RentMyStuffContext.Provider>
  );
};
