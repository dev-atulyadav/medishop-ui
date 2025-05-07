import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function Admin() {
  const pathname = useLocation().pathname;
  if (pathname === "/admin") {
    return <Navigate to="/admin/home" />;
  }
  return (
    <>
      <Outlet />
    </>
  );
}
