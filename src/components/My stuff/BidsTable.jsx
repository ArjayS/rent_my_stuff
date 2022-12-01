import React from "react";
import EachBid from "./EachBid";

export default function BidsTable(props) {
  console.log("bids form bidstable:", props.bids);
  return (
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          {props.type === "Approved" && (
            <>
              <tr>
                <th scope="col" class="py-3 px-6">
                  User
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
            <tr>
              <th scope="col" class="py-3 px-6">
                User
              </th>
              <th scope="col" class="py-3 px-6">
                Bid
              </th>
            </tr>
          )}
          {props.type === "pending" && (
            <tr>
              <th scope="col" class="py-3 px-6">
                User
              </th>
              <th scope="col" class="py-3 px-6">
                Bid
              </th>
              <th scope="col" class="py-3 px-6">
                Base Price
              </th>
              <th scope="col" class="py-3 px-6">
                Status
              </th>
              <th scope="col" class="py-3 px-6"></th>
              <th scope="col" class="py-3 px-6"></th>
              <th scope="col" class="py-3 px-6"></th>
            </tr>
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
