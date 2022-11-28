import React from "react";
import { useState } from "react";
import StuffData from "../../api/StuffData";
import "./mystuff.css";

export default function NewItemForm() {

  const [ItemName, setItemName] = useState("")
  const [ItemLocation, setItemLocation] = useState("")
  const [ItemPrice, setItemPrice] = useState("")
  const [ItemDescription, setItemDescription] = useState("")
  const [ItemImage, setItemImage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await StuffData.post("items/", {
        owner_id: 2, 
        item_name: ItemName,
        item_location: ItemLocation, 
        item_base_price: ItemPrice,
        item_status: "t",
        item_image: ItemImage,
        item_description: ItemDescription
      })
      console.log("response:",response)
    } catch (err){

    }
  }
  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <h2 class="mt-5 ml-5 text-2xl font-bold tracking-tight text-gray-900">Add new item</h2>
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-4 gap-6">
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="item-name" className="block text-sm font-medium text-gray-700">
                        Item name
                      </label>
                      <input
                        value={ItemName}
                        onChange={(e) => setItemName(e.target.value)}
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        value={ItemDescription}
                        onChange={(e) => setItemDescription(e.target.value)}
                        id="about"
                        name="about"
                        rows={3}
                        className="w-96 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Item Description"
                      />
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                        Location
                      </label>
                      <input
                        value={ItemLocation}
                        onChange={(e) => setItemLocation(e.target.value)}
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-4">
                      <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                        Price
                      </label>
                      <input
                        value={ItemPrice}
                        onChange={(e) => setItemPrice(e.target.value)}
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-4">
                      <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                        Image URL
                      </label>
                      <input
                        value={ItemImage}
                        onChange={(e) => setItemImage(e.target.value)}
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>


                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>



    </>
  )
}