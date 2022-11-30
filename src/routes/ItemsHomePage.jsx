import React from "react";
import GeneraltemsListComponent from "../components/GeneraltemsListComponent";
import SearchBarComponent from "../components/SearchBarComponent";
import StoreNavigationComponent from "../components/StoreNavigationComponent";

const ItemsHomePage = () => {
  return (
    <div>
      <StoreNavigationComponent />
      <SearchBarComponent />
      <GeneraltemsListComponent />
    </div>
  );
};

export default ItemsHomePage;
