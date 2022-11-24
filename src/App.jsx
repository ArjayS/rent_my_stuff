import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemsHomePage from "./routes/ItemsHomePage";
import ItemDetailsPage from "./routes/ItemDetailsPage";
import UsersPage from "./routes/UsersPage";
import UserDetailsPage from "./routes/UserDetailsPage";
import PersonalUserPage from "./routes/PersonalUserPage";

const App = () => {
  return (
    // <RestaurantsContextProvider>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/items" element={<ItemsHomePage />} />
          <Route path="/items/item/:id" element={<ItemDetailsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/user/:id" element={<UserDetailsPage />} />
          <Route path="/users/:id" element={<PersonalUserPage />} />
        </Routes>
      </BrowserRouter>
    </div>
    // </RestaurantsContextProvider>
  );
};

export default App;
