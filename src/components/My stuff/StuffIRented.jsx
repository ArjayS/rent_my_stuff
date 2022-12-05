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

  console.log("approved items:",approved)
  
  const bidsApproved = approved.map((item, id) => {
    return (      
      <RentedItem
        name={item.item_name}
        description={item.item_description}
        bid={item.rsrv_price_bid}
        key={id}
        image={item.item_image}
        id={item.item_id}
        type={"approved"}
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

 
  if (props.type==="Approved"){
    return(
      <>
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Approved Rentals</h2>
      <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {bidsApproved}
      </div>
      </>
    )
  } else if (props.type==="Rejected"){
    return(
      <>
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Rejected Rentals</h2>
      <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {bidsRejected}
      </div>
      </>
    )
  } else {
    return(
      <>
      <div>
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Pending Approval Rentals</h2>
      </div>
      <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {bidsPending}
      </div>
      </>
    )
  }
}