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
import Section from "./components/Customer/Section.jsx";
import User from "./Pages/User.jsx";
import Forms from "./components/Customer/Forms.jsx";
import About from "./components/About/About.jsx";
import MyCart from "./components/Customer/MyCart.jsx";
import Admin from "./components/Admin/Admin.jsx";
import UserProfile from "./components/Customer/UserProfile.jsx";
import AdminLogin from "./components/Admin/AdminLogin.jsx";
import { CookiesProvider } from "react-cookie";
import VendorHome from "./components/Vendor/VendorHome.jsx";
import VendorLogin from "./components/Vendor/VendorLogin.jsx";
import VendorSignup from "./components/Vendor/VendorSignup.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminHome from "./components/Admin/AdminHome.jsx";
import DisplayVendors from "./components/Admin/DisplayVendors.jsx";
import AddMedicine from "./components/Vendor/AddMedicine.jsx";
import DisplayMedicine from "./components/Admin/DisplayMedicine.jsx";
import ViewProductDetails from "./components/Customer/ViewProductDetails.jsx";
import Order from "./components/Customer/Order.jsx";
import ViewOrders from "./components/Vendor/ViewOrders.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Section />,
      },
      {
        path: "home",
        element: <User />,
      },
      {
        path: "home/view-medicine/:id",
        element: <ViewProductDetails />,
      },
      {
        path: "auth/:action",
        element: <Forms />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <MyCart />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "my-profile",
        element: <UserProfile />,
      },
      {
        path: "vendor",
        element: <VendorHome />,
      },
      {
        path: "vendor/login",
        element: <VendorLogin />,
      },
      {
        path: "vendor/register",
        element: <VendorSignup />,
      },
      {
        path: "vendor/add-medicine",
        element: <AddMedicine />,
      },
      {
        path: "vendor/view-orders",
        element: <ViewOrders />,
      },
      {
        path: "admin",
        element: <Admin />,
        children: [
          {
            path: "login",
            element: <AdminLogin />,
          },
          {
            path: "home",
            element: <AdminHome />,
          },
          {
            path: "vendors",
            element: <DisplayVendors />,
          },
          {
            path: "review-medicine",
            element: <DisplayMedicine />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CookiesProvider>
    <UserState>
      <CustomerState>
        <HomeState>
          <MenuState>
            <AuthState>
              <FilterState>
                <ToastContainer />
                <RouterProvider router={router} />
              </FilterState>
            </AuthState>
          </MenuState>
        </HomeState>
      </CustomerState>
    </UserState>
  </CookiesProvider>
);
