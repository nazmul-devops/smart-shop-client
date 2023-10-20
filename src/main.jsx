import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./components/Pages/Home.jsx";
import Login from "./components/Auth/Login.jsx";
import PrivateRoutes from "./routes/PrivateRoutes";
import MyCart from "./components/Pages/MyCart.jsx";
import Register from "./components/Auth/Register.jsx";
import AddProduct from "./components/Pages/AddProduct.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import NotFound from "./components/Pages/NotFound.jsx";
import UpdateProduct from "./components/Pages/UpdateProduct.jsx";
import ProductDetails from "./components/Pages/ProductDetails.jsx";
import BrandProducts from "./components/Pages/BrandProducts.jsx";
import AllProducts from "./components/Pages/AllProducts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`https://smart-shop.inneedcloud.com/products/`),
      },
      {
        path: "/brandProducts/:brandName",
        element: <BrandProducts></BrandProducts>,
      },
      {
        path: "/allProducts",
        element: <AllProducts></AllProducts>,
        loader: () => fetch(`https://smart-shop.inneedcloud.com/products/`),
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoutes>
            <AddProduct></AddProduct>
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`https://smart-shop.inneedcloud.com/products/${params.id}`),
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoutes>
            <ProductDetails></ProductDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://smart-shop.inneedcloud.com/products/${params.id}`),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoutes>
            <MyCart></MyCart>
          </PrivateRoutes>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
