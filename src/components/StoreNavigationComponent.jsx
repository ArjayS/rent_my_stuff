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

  const handleClickMyReviews = async (event) => {
    event.preventDefault();
    try {
      navigate(`/myreviews`);
      // need to change the App.jsx route to /myreviews
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickRegister = async (event) => {
    event.preventDefault();
    try {
      navigate(`/register`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickLogin = async (event) => {
    event.preventDefault();
    try {
      navigate(`/login`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickLogout = async (event) => {
    event.preventDefault();
    try {
      navigate(`/login`);
      // Need to add the ability to clear cookies
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
            {verifiedStatus && (
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
            )}
            {verifiedStatus && (
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
            )}
            {verifiedStatus && (
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
            )}
            {verifiedStatus && (
              <button
                onClick={handleClickStuffIRented}
                type="button"
                class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                My Reviews
              </button>
            )}
            {verifiedStatus && (
              <button
                onClick={handleClickLogout}
                type="button"
                class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Logout
              </button>
            )}

            {!verifiedStatus && (
              <button
                onClick={handleClickRegister}
                type="button"
                class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Register
              </button>
            )}
            {!verifiedStatus && (
              <button
                onClick={handleClickLogin}
                type="button"
                class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreNavigationComponent;
