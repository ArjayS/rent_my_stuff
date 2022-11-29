import React from "react";
import GeneraltemsListComponent from "../components/GeneraltemsListComponent";
import StoreNavigationComponent from "../components/StoreNavigationComponent";

const ItemsHomePage = () => {
  return (
    <div>
      <StoreNavigationComponent />
      <GeneraltemsListComponent />
    </div>
  );
};

export default ItemsHomePage;
