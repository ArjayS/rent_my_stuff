import React from "react";

export default function EachBid(props){
 
  console.log("bids3:",props.bids)

  const bids = props.bids.map((bid,id)=>{
    return(
      <>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {bid.guest_id}
      </th>
      <td class="py-4 px-6">
          {bid.rsrv_price_bid}
      </td>
      <td class="py-4 px-6">
          {bid.item_base_price}
      </td>
      <td class="py-4 px-6">
          {bid.rsrv_approval}
      </td>
      <td class="py-4 px-6">
          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Approve</a>
      </td>
      <td class="py-4 px-6">
          <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Reject</a>
      </td>
  </tr>
      
      </>
    )

  })
  return(
    <>
    {bids}
    </>
  )

}