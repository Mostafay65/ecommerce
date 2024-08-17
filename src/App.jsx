import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import Products from "./Components/Products/Products";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Cart from "./Components/Cart/Cart";
import CheckOut from './Components/CheckOut/CheckOut';
import NotFound from "./Components/NotFound/NotFound";
import TokenContextProvider, { TokenContext } from "./Components/Context/Token";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import CartProvider from "./Components/Context/CartContext";
import SingleProduct from "./Components/Products/SingleProduct/SingleProduct";

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Adjust animation duration if needed
            once: false, // Make sure `once` is set to false if you want animations to re-trigger
        });
    }, []);

    const routes = createBrowserRouter([
        {
            path: "",
            element: <Layout />,
            children: [
                { path: "", element: <Home /> },
                { path: "home", element: <Home /> },
                {path:'/checkout' , element: <CheckOut/>},
                { path: "products", element: <Products /> },
                { path: "products/:id", element: <SingleProduct /> },
                { path: "login", element: <Login /> },
                { path: "register", element: <Register /> },
                { path: "cart", element: <Cart /> },
                { path: "*", element: <NotFound /> },
            ],
        },
    ]);

    return (
        <CartProvider>
            <RouterProvider router={routes} />
            <ToastContainer />
        </CartProvider>
    );
}

export default App;
