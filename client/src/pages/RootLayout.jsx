// import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function RootLayout() {
  // useEffect(() => {
  //   fetch("/api")
  //     .then((data) => data.json())
  //     .then((json) => console.log(json));
  // });
  return (
    <>
      <Toaster
        toastOptions={{
          // Define default options
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
