import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import MyCard from "../Pages/MyCard/MyCard";

const MyCreatedRoutes = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root> ,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/AddProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/myCard',
                element: <PrivateRoutes> <MyCard></MyCard> </PrivateRoutes>
            },
            {
                path: '/Login',
                element: <Login></Login>

            },
            {
                path: '/Register',
                element: <Register></Register>

            }
      
        ]
        
    }
]) 

export default MyCreatedRoutes;