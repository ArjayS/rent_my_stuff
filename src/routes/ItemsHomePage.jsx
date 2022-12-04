import React, { useContext, useEffect } from "react";
import GeneraltemsListComponent from "../components/GeneraltemsListComponent";
import SearchBarComponent from "../components/SearchBarComponent";
import StoreNavigationComponent from "../components/StoreNavigationComponent";
import { RentMyStuffContext } from "../context/RentMyStuffContext";
import UserFinder from "../apis/UserFinder";

const ItemsHomePage = () => {
  const { verifiedStatus, setVerifiedStatus } = useContext(RentMyStuffContext);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await UserFinder.get("/login");

  //       if (response.data.loggedIn) {
  //         console.log("get request for /login:", response.data.data.user);
  //         setVerifiedStatus(response.data.data.user);
  //       } else {
  //         setVerifiedStatus("Nothing");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchUser();
  // }, []);
  return (
    <div>
      <StoreNavigationComponent userInfo={verifiedStatus} />
      <SearchBarComponent />
      <GeneraltemsListComponent />
    </div>
  );
};

export default ItemsHomePage;
