import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import HomePage from "../pages/HomePage";
import About from "../pages/AboutPage";
import CartShop from "../components/CartShop";
import CheckoutPage from "../pages/CheckoutPage";

export const routerApp = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/sobre-nosotros",
    element: <About />,
  },
  {
    path: "/CartShop",
    element: <CartShop />,
  },
  {
    path: "/CheckoutPage",
    element: <CheckoutPage />,
  },
]);
