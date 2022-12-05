import React from "react"
import { Link } from "react-router-dom"

export default function RentedItem(props){
  return(
    <>
<div class="group relative">
      <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
      <img
                  src={props.image}
                  alt={props.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
      </div>
      <div class="mt-4 flex justify-between">
      <div>
      <h3 class="text-sm text-gray-700">
          {props.name}

      </h3>
      <p class="max-w-[160px] whitespace-nowrap overflow-hidden text-ellipsis mt-1 text-sm text-gray-500">{props.description}</p>
    </div>
    <p class="text-sm font-medium text-gray-900">Bid:${props.bid}</p>
  </div>
  {props.type === "approved" && (
  <Link to={`/items/${props.id}/item`}>
  <button type="submit" class="mt-10 flex items-center justify-center rounded-md border border-transparent bg-slate-900 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Leave review</button>
  </Link>
  )}
</div>
  </>
  )
}