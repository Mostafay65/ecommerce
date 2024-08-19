import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import Products from "./Components/Products/Products";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Cart from "./Components/Cart/Cart";
import CheckOut from "./Components/CheckOut/CheckOut";
import NotFound from "./Components/NotFound/NotFound";
import TokenContextProvider, { TokenContext } from "./Components/Context/Token";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import CartProvider from "./Components/Context/CartContext";
import SingleProduct from "./Components/Products/SingleProduct/SingleProduct";
import ChangePassword from "./Components/ChangePassword/ChangePassword";
import ContactUs from "./Components/ContactUs/ContactUs";
import AboutUs from "./Components/AboutUs/AboutUs";
import AllUsers from "./Components/AllUsers/AllUsers";
import AllOrders from './Components/AllOrders/AllOrders';
import Messages from "./Components/Messages/Messages";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import NewPassword from "./Components/NewPassword/NewPassword";
import Wishlist from "./Components/Wishlist/Wishlist";


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
                { path: "/Contact-us", element: <ContactUs /> },
                { path: "/About-us", element: <AboutUs /> },
                { path: "/checkout", element: <CheckOut /> },
                { path:'/allorders' , element: <AllOrders/> },
                { path: "products", element: <Products /> },
                { path: "products/:id", element: <SingleProduct /> },
                { path: "login", element: <Login /> },
                { path: "register", element: <Register /> },
                { path: "cart", element: <Cart /> },
                { path: "changePassword", element: <ChangePassword /> },
                { path: "allusers", element: <AllUsers /> },
                { path: "messages", element: <Messages /> },
                { path: "wishlist", element: <Wishlist /> },
                { path: "forget-password", element: <ForgetPassword /> },
                { path: "reset-password", element: <ResetPassword /> },
                { path: "new-password", element: <NewPassword /> },
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
