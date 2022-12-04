import React from "react";
import EachBid from "./EachBid";

export default function BidsTable(props) {
  console.log("bids form bidstable:", props.bids);
  return (
    <div class="mb-40 overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="uppercase text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          {props.type === "Approved" && (
            <>
              <div>
                <h2 class="pb-3 normal-case text-2xl font-bold tracking-tight text-gray-900 bg-white">
                  Approved Bids
                </h2>
              </div>
              <tr>
                <th scope="col" class="py-3 px-6">
                  Renter
                </th>
                <th scope="col" class="py-3 px-6">
                  Bid
                </th>
                <th scope="col" class="py-3 px-6">
                  Review Renter
                </th>
              </tr>
            </>
          )}
          {props.type === "Rejected" && (
            <>
              <div>
                <h2 class="pb-3 normal-case text-2xl font-bold tracking-tight text-gray-900 bg-white">
                  Rejected Bids
                </h2>
              </div>
              <tr>
                <th scope="col" class="py-3 px-6">
                  Renter
                </th>
                <th scope="col" class="py-3 px-6">
                  Bid
                </th>
              </tr>
            </>
          )}
          {props.type === "pending" && (
            <>
              <div>
                <h2 class="pb-3 normal-case text-2xl font-bold tracking-tight text-gray-900 bg-white">
                  Pending Approval Bids
                </h2>
              </div>
              <tr>
                <th scope="col" class="py-3 px-6">
                  Renter
                </th>
                <th scope="col" class="py-3 px-6">
                  Renter Rating
                </th>
                <th scope="col" class="py-3 px-6">
                  Bid
                </th>
                <th scope="col" class="py-3 px-6">
                  Status
                </th>
                <th scope="col" class="py-3 px-6"></th>
                <th scope="col" class="py-3 px-6"></th>
                <th scope="col" class="py-3 px-6"></th>
              </tr>
            </>
          )}
        </thead>
        <tbody>
          <EachBid
            bids={props.bids}
            approval={props.approval}
            type={props.type}
            openmodal={props.openmodal}
          />
        </tbody>
      </table>
    </div>
  );
}
