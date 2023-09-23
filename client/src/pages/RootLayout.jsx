// import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function RootLayout() {
  return (
    <>
      <Toaster
        toastOptions={{
          className: "",
          duration: 10000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
      <Outlet />
    </>
  );
}
