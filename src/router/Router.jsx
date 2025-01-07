import {
    createBrowserRouter
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import Login from "../AuthPages/Login";
import Register from "../AuthPages/Register";
import Assignment from "../Assignment/Assignment";
import CreateAssignment from "../Assignment/CreateAssignment";
import AssignmentDetails from "../Assignment/AssignmentDetails";
import UpdateAssignment from "../Assignment/UpdateAssignment";

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
            {
                path: '/assignment-details/:id',
                element: <AssignmentDetails></AssignmentDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/assignment/${params.id}`)
            },
            {
                path: '/update-assingment/:id',
                element: <UpdateAssignment></UpdateAssignment>,
                loader: ({ params }) => fetch(`http://localhost:5000/assignment/${params.id}`)
            },
        ]
    },
]);

export default router