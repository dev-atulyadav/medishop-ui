import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthState from "./context/form/AuthState.jsx";
import MenuState from "./context/menu/MenuState.jsx";
import FilterState from "./context/filter/FilterState.jsx";
import UserState from "./context/user/UserState.jsx";
import HomeState from "./context/home/HomeState.jsx";
import CustomerState from "./context/APIs/Customer/CustomerSate.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserState>
    <CustomerState>
      <HomeState>
        <MenuState>
          <AuthState>
            <FilterState>
              <App />
            </FilterState>
          </AuthState>
        </MenuState>
      </HomeState>
    </CustomerState>
  </UserState>
);
