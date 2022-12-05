import React, { useContext, useEffect } from "react";
import { RentMyStuffContext } from "../context/RentMyStuffContext";
import UserFinder from "../apis/UserFinder";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { userEmail, setUserEmail, password, setPassword, setVerifiedStatus } =
    useContext(RentMyStuffContext);

  let navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await UserFinder.post("/login", {
        user_email: userEmail,
        user_password: password,
      });

      // console.log(response.data);

      if (response.data.message) {
        setVerifiedStatus(response.data.message);
      } else {
        setVerifiedStatus(response.data);
        navigate(`/mystuff`);
        // console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await UserFinder.get("/login");

        console.log("get request for /login:", response);

        if (response.data.loggedIn) {
          setVerifiedStatus(response.data.data.user);
        } else {
          setVerifiedStatus("Nothing");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();

    const fetchLoggedOutUser = async () => {
      try {
        const response = await UserFinder.get("/logout");

        console.log("get request for /logout:", response);

        if (!response.data.loggedIn) {
          setVerifiedStatus(response.data.data.user);
        } else {
          setVerifiedStatus("Nothing");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchLoggedOutUser();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Login Page</h1>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in here
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                    onChange={(event) => {
                      setUserEmail(event.target.value);
                    }}
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={handleLogin}
                >
                  Log In
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't have an account?{" "}
                  <a
                    href="http://localhost:3000/register"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Register here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
