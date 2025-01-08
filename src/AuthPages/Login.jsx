import Lottie from "lottie-react";
import registerAnimationData from "../assets/login.json"
import { useContext, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const Login = () => {
    const { signIn, setUser, loginWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    // const emailRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                navigate(location?.state ? location.state : '/');
                setUser(user);
                toast.success('Login Successfully');
            })
            .catch((error) => {
                toast.error(`Login Unsuccessful: ${error.message}`);
            });
    }
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate('/');
                toast.success("Logged in with Google successfully!");
            })
            .catch((error) => {
                console.error("Google Login Error:", error);
                toast.error(error.message);
            });
    };
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie animationData={registerAnimationData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="mt-5 pl-10 text-4xl font-bold">Login Now!</h1>

                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <div className="form-control mt-4 relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <button
                                    type="button"
                                    className="btn btn-outline absolute right-4 top-9"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Enter your password"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <h2  className=" text-center" >Dont Have Any Account? <Link className="link" to={"/register"}>Create Account</Link></h2>
                    <div className="divider"></div>
                    <button className="btn mt-4" onClick={handleGoogleLogin}>
                        <FaGoogle className="mr-2" /> Sign Up with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;