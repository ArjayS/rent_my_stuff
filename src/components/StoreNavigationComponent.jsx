import React from "react";
import SearchBarComponent from "./SearchBarComponent";

const StoreNavigationComponent = (props) => {
  return (
    <div>
      <h1 className="text-6xl font-light text-center">Items Finder</h1>
      <SearchBarComponent />
    </div>
  );
};

export default StoreNavigationComponent;
