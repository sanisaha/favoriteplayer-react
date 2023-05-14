import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddPlayer from "../Pages/AddPlayer";
import EditPlayer from "../Pages/EditPlayer";
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
            },
            {
                path: '/add',
                element: <AddPlayer></AddPlayer>,
            },
            
            {
                path: '/player/:id/edit',
                element: <EditPlayer></EditPlayer>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }

]);