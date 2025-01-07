import {
    createBrowserRouter
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import Login from "../AuthPages/Login";
import Register from "../AuthPages/Register";
import Assignment from "../Assignment/Assignment";
import CreateAssignment from "../Assignment/CreateAssignment";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/assignment',
                element: <Assignment></Assignment>
            },
            {
                path: '/create-assignment',
                element: <CreateAssignment></CreateAssignment>
            },
        ]
    },
]);

export default router