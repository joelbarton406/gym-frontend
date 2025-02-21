import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./components/layouts/HomeLayout";
import Home from "./components/Home";
import Classes, { classesLoader } from "./components/Classes";
import About from "./components/About";
import Login from "./components/SignupLogin";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        // loader: homeLoader,
        errorElement: <div>failed to render HOME</div>,
      },
      {
        path: "/profile",
        element: <div>profile</div>,
      },
      {
        path: "/classes",
        element: <Classes />,
        loader: classesLoader,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      //   {
      //     path: "/calendar",
      //     element: <div>calendar</div>,
      //   },
      {
        path: "/*",
        element: <div>404</div>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
/* 
'/'
'/about'
'/events'
'/calendar'
'/profile?member_id=uuid'

*/
