import React from "react";
import { useState } from "react";
import { FaBookDead } from "react-icons/fa";
import StuffData from "../../api/StuffData";
import StarRatingComponent from "../StarRatingComponent";

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
            {bid.renter}
          </th>
          <td class="py-4 px-6">${bid.rsrv_price_bid}</td>
          <td class="py-4 px-6">
            <a
              onClick={() => props.openmodal(bid)}
              class="inline-flex items-center h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
            >
              Review Renter
            </a>
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
            {bid.renter}
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
            {bid.renter}
          </th>
          <td class="py-4 px-6"><StarRatingComponent key={id} rating={bid.rate}/></td>
          <td class="py-4 px-6">${bid.rsrv_price_bid}</td>

          <td class="py-4 px-6">{bid.rsrv_approval}</td>

          <td class="py-4 px-6">
            <a
              onClick={() => props.approval(bid.id, "Approved")}
              class="inline-flex items-center h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
            >
              Approve
            </a>
          </td>
          <td class="py-4 px-6">
            <a
              onClick={() => props.approval(bid.id, "Rejected")}
              class="inline-flex items-center h-8 px-4 m-2 text-sm text-white transition-colors duration-150 bg-red-600 rounded-lg focus:shadow-outline hover:bg-red-800"
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
