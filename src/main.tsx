import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./components/layouts/HomeLayout";
import Home from "./components/Home";
import Classes, { classesLoader } from "./components/Classes";
import Member, { memberLoader } from "./components/Member";
import About from "./components/About";
import Login from "./components/SignupLogin";
import "./index.css";
import { AuthProvider } from "./providers/auth.provider";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <div>404 something broke</div>,
    children: [
      {
        index: true,
        element: <Home />,
        // loader: homeLoader,
        errorElement: <div>failed to render HOME</div>,
      },
      {
        path: "/member/:memberId",
        element: <Member />,
        loader: memberLoader,
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
      {
        path: "/*",
        element: <div>404</div>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
