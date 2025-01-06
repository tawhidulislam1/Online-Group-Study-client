import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import Lottie from "lottie-react";
import registerAnimationData from "../assets/register.json"


const Register = () => {
    const { createUser, setUser, updateProfiles, loginWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(email);

        const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;
        if (!regex.test(password)) {
            toast.error(`Password requirements:\n- Must have an Uppercase letter\n- Must have a Lowercase letter\n- Must contain at least one number\n- Length must be at least 6 characters`);
            return;
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                // Update user profile
                updateProfiles({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate('/');
                        toast.success("Account Created Successfully");
                    })
                    .catch((error) => {
                        console.error("Profile Update Failed:", error);
                        toast.error("Account created, but profile update failed. Please update manually.");
                    });
            })
            .catch((error) => {
                console.error("Signup Error:", error);
                toast.error(error.message);
            });

    };
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
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Lottie animationData={registerAnimationData}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-md p-10 shrink-0 shadow-2xl">
                        <h1 className="mt-5 pl-10 text-4xl font-bold">Register Now!</h1>

                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your Name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    name="photo"
                                    placeholder="Enter your Photo URL"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
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
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            <div className="text-center mt-4">
                                <p className="text-sm">
                                    Already have an account?{' '}
                                    <a href="/login" className="text-primary link">
                                        Login
                                    </a>
                                </p>
                            </div>
                        </form>
                        <button className="btn mt-4" onClick={handleGoogleLogin}>
                            <FaGoogle className="mr-2" /> Sign Up with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;