import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import FirebaseHomePage from "./pages/firebase/FirebaseHomePage";
import MockApiHomePage from "./pages/mock/MockApiHomePage";
import RootLayout from "./pages/RootLayout";
import FirebaseDashboardPage from "./pages/firebase/FirebaseDashboardPage";
import MockApiDashboardPage from "./pages/mock/MockApiDashboardPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <MockApiHomePage />,
      },
      {
        path: "/dashboard",
        element: <MockApiDashboardPage />,
      },
    ],
  },
  {
    path: "/firebase",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <FirebaseHomePage />,
      },
      {
        path: "dashboard",
        element: <FirebaseDashboardPage />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
