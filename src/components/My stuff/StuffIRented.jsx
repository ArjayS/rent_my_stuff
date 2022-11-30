import React from "react";
import RentedItem from "./RentedItem";

export default function StuffIRented(props){
  let approved =[];
  let pending =[];
  let rejected =[];

  function filter(values) {
    values.items.map((item, id) => {
      if(item.rsrv_approval === "pending"){
        pending.push(item)
      } else if (item.rsrv_approval === "Approved"){
        approved.push(item)
      } else {
        rejected.push(item)
      }
      return 
    })
  } 

  filter(props)
  
  // console.log("pending:",pending)
  // console.log("approved:",approved)
  // console.log("rejected:",rejected)


  const bidsApproved = approved.map((item, id) => {
    return (      
      <RentedItem
        name={item.item_name}
        description={item.item_description}
        bid={item.rsrv_price_bid}
        key={id}
        image={item.item_image}
      />
    );
  })

  const bidsRejected = rejected.map((item, id) => {
    return (      
      <RentedItem
        name={item.item_name}
        description={item.item_description}
        bid={item.rsrv_price_bid}
        key={id}
        image={item.item_image}
      />
    );
  })

  const bidsPending = pending.map((item, id) => {
    return (      
      <RentedItem
        name={item.item_name}
        description={item.item_description}
        bid={item.rsrv_price_bid}
        key={id}
        image={item.item_image}
      />
    );
  })

  return(
    <>
    {props.type==="Approved" && (
      {bidsApproved}
    )}
    {props.type==="Rejected" && (
      {bidsRejected}
    )}
    {props.type==="pending" && (
      {bidsPending}
    )}     
    </>
  )
}