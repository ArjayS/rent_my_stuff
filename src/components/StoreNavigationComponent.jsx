import React, { useContext, useEffect } from "react";
import { RentMyStuffContext } from "../context/RentMyStuffContext";
import UserFinder from "../apis/UserFinder";
import { useNavigate } from "react-router-dom";

const StoreNavigationComponent = () => {
  let navigate = useNavigate();

  const { verifiedStatus, setVerifiedStatus } = useContext(RentMyStuffContext);

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
      const response = await UserFinder.post("/logout");
      setVerifiedStatus(response.data);
      navigate(`/login`);
      // Need to add the ability to clear cookies
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav class="bg-gray-900 border-gray-900 ">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          
        <a href="" class="flex items-center">
            <img src={process.env.PUBLIC_URL + '/img/logo.svg'} class="h-6 -mb-8 -mt-2 mr-3 " alt="rent my stuff Logo" />
        </a>
            
          
          <div class="flex items-center">
            <h1 className="mt-3 self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Welcome! {verifiedStatus.user_name}
            </h1>
          </div>
        </div>
      </nav>
      <nav class="bg-gray-900">
        <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
          <div class="flex items-center">
            <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                {verifiedStatus && (
                  <button
                    onClick={handleClickItemsHomePage}
                    type="button"
                    class="inline-flex w-full justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-100 shadow-sm hover:text-sky-500"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    Browse Stuff
                  </button>
                )}
              </li>
              <li>
                {verifiedStatus && (
                  <button
                    onClick={handleClickMyStuff}
                    type="button"
                    class="inline-flex w-full justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-100 shadow-sm hover:text-sky-500"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    My Stuff
                  </button>
                )}
              </li>
              <li>
                {verifiedStatus && (
                  <button
                    onClick={handleClickStuffIRented}
                    type="button"
                    class="inline-flex w-full justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-100 shadow-sm hover:text-sky-500"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    Stuff I Rented
                  </button>
                )}
              </li>
              <li>
                {verifiedStatus && (
                  <button
                    onClick={handleClickMyReviews}
                    type="button"
                    class="inline-flex w-full justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-100 shadow-sm hover:text-sky-500"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    My Reviews
                  </button>
                )}
              </li>
              <li>
                {verifiedStatus && (
                  <button
                    onClick={handleClickLogout}
                    type="button"
                    class="inline-flex w-full justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-100 shadow-sm hover:text-sky-500"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    Logout
                  </button>
                )}
              </li>
              <li>
                {!verifiedStatus && (
                  <button
                    onClick={handleClickRegister}
                    type="button"
                    class="inline-flex w-full justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-100 shadow-sm hover:text-sky-500"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    Register
                  </button>
                )}
              </li>
              <li>
                {!verifiedStatus && (
                  <button
                    onClick={handleClickLogin}
                    type="button"
                    class="inline-flex w-full justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-100 shadow-sm hover:text-sky-500"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    Login
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
};

export default StoreNavigationComponent;
