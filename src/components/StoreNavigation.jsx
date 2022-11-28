import React, { useContext } from "react";
import SearchBar from "./SearchBar";

const StoreNavigation = (props) => {
  return (
    <div>
      <h1 className="text-6xl font-light text-center">Items Finder</h1>
      <SearchBar />
    </div>
  );
};

export default StoreNavigation;
