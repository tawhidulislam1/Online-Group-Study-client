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
import PendingAssigment from "../Assignment/PendingAssigment";
import About from "../About/About";

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
                loader: ({ params }) => fetch(`https://online-group-study-server-bay.vercel.app/assignment/${params.id}`)
            },
            {
                path: '/update-assingment/:id',
                element: <PrivateRouter><UpdateAssignment></UpdateAssignment></PrivateRouter>,
                loader: ({ params }) => fetch(`https://online-group-study-server-bay.vercel.app/assignment/${params.id}`)
            },
            {
                path: '/take-assignment/:id',
                element: <PrivateRouter><DoAsssignment></DoAsssignment></PrivateRouter>,
                loader: ({ params }) => fetch(`https://online-group-study-server-bay.vercel.app/assignment/${params.id}`)
            },
            {
                path: '/attempted-assignments',
                element: <PrivateRouter><MyAttemptedAssignments></MyAttemptedAssignments></PrivateRouter>,
            },
            {
                path: '/peding-assignments',
                element: <PrivateRouter><PendingAssigment></PendingAssigment></PrivateRouter>,
            },
            {
                path: '/about',
                element: <About></About>,
            },
        ]
    },
    {
        path: "*",
        element: <Error></Error>,
    },
]);

export default router