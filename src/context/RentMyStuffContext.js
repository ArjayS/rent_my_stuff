import React, { useState, createContext, useEffect } from "react";
import ItemFinder from "../apis/ItemFinder";

export const RentMyStuffContext = createContext();

export const RentMyStuffContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [itemListDefault, setItemListDefault] = useState();
  const [itemsList, setItemsList] = useState([]);

  // Item Search feature <-----------------------------------------------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ItemFinder.get("/");

        setItemsList(response.data.data.items);
        setItemListDefault(response.data.data.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const updateInput = async (input) => {
    const filtered = itemListDefault.filter((itemDefault) => {
      return itemDefault.item_name.toLowerCase().includes(input.toLowerCase());
    });

    setInput(input);
    setItemsList(filtered);
  };
  // <--------------------------------------------------------------------------

  return (
    <RentMyStuffContext.Provider
      value={{
        itemsList: itemsList,
        setItemsList,
        input: input,
        setInput,
        itemListDefault: itemListDefault,
        setItemListDefault,
        updateInput: updateInput,
      }}
    >
      {props.children}
    </RentMyStuffContext.Provider>
  );
};
