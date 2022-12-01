import React from "react";
import { useState } from "react";
import StuffData from "../../api/StuffData";

export default function EachBid(props) {
  let approved = [];
  let rejected = [];
  let pending = [];

  function filter(values) {
    values.bids.map((bid, id) => {
      if (bid.rsrv_approval === "pending") {
        pending.push(bid);
      } else if (bid.rsrv_approval === "Approved") {
        approved.push(bid);
      } else {
        rejected.push(bid);
      }
      return;
    });
  }

  filter(props);

  const approvedBids = approved.map((bid, id) => {
    return (
      <>
        <tr class="bg-white border-b ">
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
          >
            {bid.guest_id}
          </th>
          <td class="py-4 px-6">${bid.rsrv_price_bid}</td>
          <td class="py-4 px-6">
            <button
              type="submit"
              class="mt-10 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={()=>props.openmodal(bid)}
            >
              Write Review
            </button>
          </td>
        </tr>
      </>
    );
  });

  const rejectedBids = rejected.map((bid, id) => {
    return (
      <>
        <tr class="bg-white border-b ">
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
          >
            {bid.guest_id}
          </th>
          <td class="py-4 px-6">${bid.rsrv_price_bid}</td>
          
        </tr>
      </>
    );
  });

  const pendingBids = pending.map((bid, id) => {
    return (
      <>
        <tr class="bg-white border-b ">
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
          >
            {bid.guest_id}
          </th>
          <td class="py-4 px-6">${bid.rsrv_price_bid}</td>
          <td class="py-4 px-6">${bid.item_base_price}</td>

          <td class="py-4 px-6">{bid.rsrv_approval}</td>

          <td class="py-4 px-6">
            <a
              onClick={() => props.approval(bid.id, "Approved")}
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Approve
            </a>
          </td>
          <td class="py-4 px-6">
            <a
              onClick={() => props.approval(bid.id, "Rejected")}
              class="font-medium text-red-600 dark:text-red-500 hover:underline"
            >
              Reject
            </a>
          </td>
        </tr>
      </>
    );
  });

  if(props.type==="Approved"){
    return(
      <>
      {approvedBids}
      </>
    )
  }
  if(props.type==="pending"){
    return(
      <>
      {pendingBids}
      </>
    )
  }
  if(props.type==="Rejected"){
    return(
      <>
      {rejectedBids}
      </>
    )
  }
}
