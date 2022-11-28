import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemsHomePage from "./routes/ItemsHomePage";
import ItemDetailsPage from "./routes/ItemDetailsPage";
import UsersPage from "./routes/UsersPage";
import UserDetailsPage from "./routes/UserDetailsPage";
import PersonalUserPage from "./routes/PersonalUserPage";
import NewItemPage from "./routes/NewItemPage";

const App = () => {
  return (
    // <RestaurantsContextProvider>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemsHomePage />} />
          <Route path="/items/:id/item" element={<ItemDetailsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id/userreview" element={<UserDetailsPage />} />
          <Route path="/users/:id" element={<PersonalUserPage />} />
        </Routes>
      </BrowserRouter>
    </div>
    // </RestaurantsContextProvider>
  );
};

export default App;
