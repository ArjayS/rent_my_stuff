import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemsHomePage from "./routes/ItemsHomePage";
import ItemDetailsPage from "./routes/ItemDetailsPage";
import UsersPage from "./routes/UsersPage";
import UserDetailsPage from "./routes/UserDetailsPage";
import PersonalUserPage from "./routes/PersonalUserPage";
import PersonalRentalsPage from "./routes/PersonalRentalsPage";
import NewItemPage from "./routes/NewItemPage";
import { RentMyStuffContextProvider } from "./context/RentMyStuffContext";
import AcceptBidsPage from "./routes/AcceptBidsPage";
import RegisterPage from "./routes/RegisterPage";
import LoginPage from "./routes/LoginPage";

const App = () => {
  return (
    <div>
      <RentMyStuffContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ItemsHomePage />} />
            <Route path="/items/:id/item" element={<ItemDetailsPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/:id/userreview" element={<UserDetailsPage />} />
            <Route path="/users/:id" element={<PersonalUserPage />} />
            <Route path="/users/:id/rented" element={<PersonalRentalsPage />} />
            <Route path="/items/:id/bids" element={<AcceptBidsPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </RentMyStuffContextProvider>
    </div>
  );
};

export default App;
