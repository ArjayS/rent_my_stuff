import React, { useState, createContext } from "react";

export const RentMyStuffContext = createContext();
export const RentMyStuffContextProvider = (props) => {
  const [items, setItems] = useState([]);
  return (
    <RentMyStuffContext.Provider value={{ items: items, setItems }}>
      {props.children}
    </RentMyStuffContext.Provider>
  );
};
