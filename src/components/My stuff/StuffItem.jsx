import React from "react"
import axios from "axios"
import StuffData from "../../api/StuffData"

export default function StuffItem(props){



  return(
        <div class="group relative">
          <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          </div>
          <div class="mt-4 flex justify-between">
          <div>
          <h3 class="text-sm text-gray-700">          
             
              {props.name}
          </h3>
          <p class="mt-1 text-sm text-gray-500">{props.description}</p>
        </div>
        <p class="text-sm font-medium text-gray-900">${props.price}</p>
      </div>
      <form>
      <button type="submit" class="mt-10 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Item Bids</button>
      </form>
 
      <button onClick={()=> props.delete(props.id)} type="submit" class="mt-10 flex items-center justify-center rounded-md border border-transparent bg-red-600 py-3 px-8 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Delete</button>
      
    </div>
  )
}