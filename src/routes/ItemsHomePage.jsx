import React, { useContext } from "react";
import GeneraltemsListComponent from "../components/GeneraltemsListComponent";
import SearchBarComponent from "../components/SearchBarComponent";
import StoreNavigationComponent from "../components/StoreNavigationComponent";
import { RentMyStuffContext } from "../context/RentMyStuffContext";

const ItemsHomePage = () => {
  const { verifiedStatus } = useContext(RentMyStuffContext);

  return (
    <div>
      <StoreNavigationComponent userInfo={verifiedStatus} />
      <SearchBarComponent />
      <GeneraltemsListComponent />
    </div>
  );
};

export default ItemsHomePage;
