import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

const axiosSecure = axios.create({
    baseURL: "https://online-group-study-server-bay.vercel.app",
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();
   
    useEffect(() => {
        axiosSecure.interceptors.response.use(response => {
            return response
        }, error => {
            console.log(error);
            if (error.status === 401 || error.status === 403) {
                logOut()
                    .then(() => {
                        console.log("YOur are logout now");
                        navigate('/login')
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
            return Promise.reject(error)
        })
    }, [logOut, navigate])
    return (axiosSecure);
};

export default useAxiosSecure;