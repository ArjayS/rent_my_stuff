import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemsHomePage from "./routes/ItemsHomePage";
import ItemDetailsPage from "./routes/ItemDetailsPage";
import UsersPage from "./routes/UsersPage";
import UserDetailsPage from "./routes/UserDetailsPage";
import PersonalUserPage from "./routes/PersonalUserPage";
import NewItemPage from "./routes/NewItemPage";
import { RentMyStuffContextProvider } from "./context/RentMyStuffContext";
import AcceptBidsPage from "./routes/AcceptBidsPage";

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
            <Route path="/items/:id/bids" element={<AcceptBidsPage />} />
          </Routes>
        </BrowserRouter>
      </RentMyStuffContextProvider>
     </div>
  );
};

export default App;
