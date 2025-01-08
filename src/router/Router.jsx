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
import Error from "../Error/Error";
import DoAsssignment from "../Assignment/DoAsssignment";
import PrivateRouter from "./PrivateRouter";
import MyAttemptedAssignments from "../Assignment/myAttemptedAssignments";

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
                element: <PrivateRouter><CreateAssignment></CreateAssignment></PrivateRouter>
            },
            {
                path: '/assignment-details/:id',
                element: <PrivateRouter><AssignmentDetails></AssignmentDetails></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/assignment/${params.id}`)
            },
            {
                path: '/update-assingment/:id',
                element: <PrivateRouter><UpdateAssignment></UpdateAssignment></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/assignment/${params.id}`)
            },
            {
                path: '/take-assignment/:id',
                element: <PrivateRouter><DoAsssignment></DoAsssignment></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/assignment/${params.id}`)
            },
            {
                path: '/attempted-assignments',
                element: <PrivateRouter><MyAttemptedAssignments></MyAttemptedAssignments></PrivateRouter>,
            },
        ]
    },
    {
        path: "*",
        element: <Error></Error>,
    },
]);

export default router