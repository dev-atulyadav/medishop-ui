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
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Section from "./components/Section.jsx";
import User from "./Pages/User.jsx";
import Forms from "./components/Forms.jsx";
import About from "./components/About.jsx";
import MyCart from "./components/MyCart.jsx";
import Admin from "./components/Admin/Admin.jsx";
import UserProfile from "./components/UserProfile.jsx";
import AdminLogin from "./components/Admin/AdminLogin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Section />,
      },
      {
        path: "/home",
        element: <User />,
      },
      {
        path: "/auth",
        element: <Forms />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <MyCart />,
      },
      {
        path: "/my-profile",
        element: <UserProfile />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children:[
      {
        path:"/admin/login",
        element:<AdminLogin/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserState>
    <CustomerState>
      <HomeState>
        <MenuState>
          <AuthState>
            <FilterState>
              <RouterProvider router={router} />
            </FilterState>
          </AuthState>
        </MenuState>
      </HomeState>
    </CustomerState>
  </UserState>
);
