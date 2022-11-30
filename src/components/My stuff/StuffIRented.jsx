import React from "react";
import RentedItem from "./RentedItem";

export default function StuffIRented(props){
  const items = props.items.map((item, id) => {
    return (

          
      <RentedItem
        name={item.item_name}
        description={item.item_description}
        bid={item.rsrv_price_bid}
        key={id}
        image={item.item_image}
      />
    );
  });

  return(
    <>
      {items}
    </>
  )
}