import React, { useContext, useEffect } from "react";
import { RentMyStuffContext } from "../context/RentMyStuffContext";
import UserFinder from "../apis/UserFinder";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { verifiedStatus, setVerifiedStatus } = useContext(RentMyStuffContext);

  let navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await UserFinder.get("/login");
        console.log(response);
        setVerifiedStatus(response.data);
        // if (response.data.loggedIn) {
        //   setVerifiedStatus(response.data);
        // } else {
        //   setVerifiedStatus("Nothing");
        // }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      navigate(`/another`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Home Page! Welcome, {verifiedStatus}
      </h1>
      <button
        type="submit"
        class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        onClick={handleLogin}
      >
        Log In
      </button>
    </div>
  );
};

export default HomePage;
