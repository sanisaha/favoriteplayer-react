import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Pages/Error";
import Home from "../Pages/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader: () => fetch('http://localhost:5000/courses')
            },
            
            // {
            //     path: '/checkout/:id',
            //     element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
            //     loader: ({ params }) => fetch(`http://localhost:5000/checkout/${params.id}`)
            // }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }

]);