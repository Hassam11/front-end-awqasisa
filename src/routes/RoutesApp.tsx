import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import HomePage from "../pages/HomePage";
import About from "../pages/AboutPage";
import CartShop from "../components/CartShop";
import CheckoutPage from "../pages/CheckoutPage";
import MainPage from "../pages/MainPage";
import PerfilPage from "../pages/PerfilPage";
import ProductDetail from "../pages/ProductDetail";
import DashboardPage from "../pages/DashboardPage";
import ClientesPage from "../pages/Dashboard/ClientesPage";
import ProductosPage from "../pages/Dashboard/ProductosPage";
import FacturasPage from "../pages/Dashboard/FacturasPage";
import VentasPage from "../pages/Dashboard/VentasPage";

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
    path: "/product/:productId",
    element: <ProductDetail />,
  },
  {
    path: "/CartShop",
    element: <CartShop />,
  },
  {
    path: "/CheckoutPage",
    element: <CheckoutPage />,
  },
  {
    path: "/perfil",
    element: <PerfilPage />,
  },
  {
    path: "/Dashboard",
    element: <DashboardPage />,
    //children: [
    //{
    //path: "clientes",
    //element: <ClientesPage />,
    //loader: teamLoader,
    //},
    //],
  },
  {
    path: "/Dashboard/clientes",
    element: <ClientesPage />,
  },
  {
    path: "/Dashboard/productos",
    element: <ProductosPage />,
  },
  {
    path: "/Dashboard/facturas",
    element: <FacturasPage />,
  },
  {
    path: "/Dashboard/ventas",
    element: <VentasPage />,
  },
]);
