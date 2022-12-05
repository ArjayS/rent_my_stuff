import React, { useContext, useEffect } from "react";
import { RentMyStuffContext } from "../context/RentMyStuffContext";
import UserFinder from "../apis/UserFinder";
import { useNavigate } from "react-router-dom";

const StoreNavigationComponent = () => {
  let navigate = useNavigate();

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await UserFinder.get("/login");

  //       if (response.data.loggedIn) {
  //         console.log("get request for /login:", response.data.data.user);
  //         setVerifiedStatus(response.data.data.user);
  //       } else {
  //         setVerifiedStatus("Nothing");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchUser();
  // }, []);

  const { showOptions, setShowOptions, verifiedStatus, setVerifiedStatus } =
    useContext(RentMyStuffContext);

  const handleClickHamburger = () => {
    setShowOptions(!showOptions);
  };

  const handleClickItemsHomePage = async (event) => {
    event.preventDefault();
    try {
      navigate(`/`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickMyStuff = async (event) => {
    event.preventDefault();
    try {
      navigate(`/mystuff`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickStuffIRented = async (event) => {
    event.preventDefault();
    try {
      navigate(`/stuffirented`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-6xl font-light text-center">
        Welcome! {verifiedStatus.user_name}
      </h1>
      <div className=" bg-gray-200 flex justify-center items-center">
        <div class="relative inline-block text-left">
          <div>
            <button
              onClick={handleClickItemsHomePage}
              type="button"
              class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              Browse Our Stuff
            </button>
            <button
              onClick={handleClickMyStuff}
              type="button"
              class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              My Stuff
            </button>
            <button
              onClick={handleClickStuffIRented}
              type="button"
              class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              Stuff I Rented
            </button>
            <button
              onClick={handleClickHamburger}
              type="button"
              class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              {/* <!-- Heroicon name: hamburger --> */}
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}
          {showOptions && (
            <div
              class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div class="py-1" role="none">
                {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                <a
                  href="http://localhost:3000/"
                  class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  Browse our Stuff
                </a>
                <a
                  href="http://localhost:3000/users"
                  class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                >
                  Users
                </a>
                {/* <form method="POST" action="#" role="none">
                <button
                  type="submit"
                  class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-3"
                >
                  Sign Out
                </button>
              </form>
              <form method="POST" action="#" role="none">
                <button
                  type="submit"
                  class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-3"
                >
                  Sign In
                </button>
              </form>
              <form method="POST" action="#" role="none">
                <button
                  type="submit"
                  class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-3"
                >
                  Register
                </button>
              </form> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreNavigationComponent;
