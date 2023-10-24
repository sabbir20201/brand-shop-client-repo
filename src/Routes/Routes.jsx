import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import MyCard from "../Pages/MyCard/MyCard";
import AllProduct from "../Pages/Product/AllProduct";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";



const MyCreatedRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json'),
            },
            {
                path: '/product/:brand',
                element: <AllProduct></AllProduct>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.brand}`)
            },

            {
                path: '/product/brand/:id',
                element: <ProductDetail></ProductDetail>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/brand/${params.id}`)
            },
            {
                path: '/AddProduct',
                element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
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