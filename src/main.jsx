import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthState from "./context/form/AuthState";
import MenuState from "./context/menu/MenuState";
import FilterState from "./context/filter/FilterState";
import UserState from "./context/user/UserState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserState>
    <MenuState>
      <AuthState>
        <FilterState>
          <App />
        </FilterState>
      </AuthState>
    </MenuState>
  </UserState>
);
