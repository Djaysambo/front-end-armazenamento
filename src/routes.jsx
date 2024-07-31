import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home";
import {SignUp} from "./pages/signup"
import { ErrorPage } from "./pages/error-page";
import { Login } from "./pages/login";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sign-up",
    element: < SignUp/>,
  },
  {
    path: "/login",
    element: < Login/>,
  },
 
]);
