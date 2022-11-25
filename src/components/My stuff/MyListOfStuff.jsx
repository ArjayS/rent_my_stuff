import React from "react";
import StuffItem from "./StuffItem";

export default function MyListofStuff(props){
  const items = props.items.map((item) => {
    return (
      <StuffItem
        name={item.item_name}
        description={item.item_description}
        price={item.item_base_price}
      />
    );
  });

  return(
    <>
      {items}
    </>
  )
}