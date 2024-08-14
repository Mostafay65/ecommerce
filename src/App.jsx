import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import LayOut from "./Components/LayOut/LayOut";
import Products from "./Components/Products/Products";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Cart from "./Components/Cart/Cart";
import NotFound from "./Components/NotFound/NotFound";
function App() {

  const routes =  createBrowserRouter([
        {path : "" ,element : <LayOut/> , children:[
            {path : "" , element : <Home />},
            {path : "home" , element : <Home />},
            {path : "products" , element : <Products />},
            {path : "login" , element : <Login />},
            {path : "register" , element : <Register />},
            {path : "cart" , element : <Cart />},
            {path : "*" , element : <NotFound />},
        ]}
    ])

    return <RouterProvider router={routes}>

    </RouterProvider>
}

export default App;
