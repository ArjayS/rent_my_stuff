import React, { Fragment, useRef, useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import StarRating from "./StarRating";
import StuffData from "../../api/StuffData";

export default function UserReviewModal(props) {


  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);
  const [rating, setRating] = useState([]);
  const [message, setMessage] = useState("");
  const renterId = props.renter

  function renterRating(value){
    setRating(value)
  }

  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await StuffData.post(`userreviews/renter/${renterId}`, {
          owner_id: props.reviewer, 
          item_id: props.item,
          rent_worthy: rating,
          rent_message: message
        
        })
      props.closeModal(false)
      console.log("renter", renterId)  
      console.log("rating:", rating)
      console.log("message",message)
      console.log("item", props.item)
      console.log("owner", props.reviewer)
    } catch (err){

    }}


  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="mt-10 sm:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-6">
                      <div className="mt-5 md:col-span-2 md:mt-0">
                        <h2 class="mt-5 ml-5 text-2xl font-bold tracking-tight text-gray-900">
                          Review The Renter
                        </h2>
                        <form action="#" method="POST">
                          <div className="overflow-hidden shadow sm:rounded-md">
                            <div className="bg-white px-4 py-5 sm:p-6">
                              <div className="grid grid-cols-4 gap-6">
                                <div className="col-span-6 sm:col-span-4">
                                  Renter Rating
                                  <StarRating rating={renterRating}/>
                                </div>

                                <div>
                                  <label
                                    htmlFor="description"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Comments
                                  </label>
                                  <div className="mt-1">
                                    <textarea
                                      value={message}
                                      onChange={(e) =>
                                        setMessage(e.target.value)
                                      }
                                      id="about"
                                      name="about"
                                      rows={3}
                                      className="w-96 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      placeholder="Comments about the renter"
                                    />
                                  </div>
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
