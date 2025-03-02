import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.init";
import axios from "axios";

const GoogleProvider = new GoogleAuthProvider();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateProfiles = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser?.email) {
                const user = { email: currentUser.email }
                axios.post('https://online-group-study-server-bay.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        setLoading(false);
                        console.log("login", res.data)
                    })
            }
            else {
                axios.post('https://online-group-study-server-bay.vercel.app/logout', {}, { withCredentials: true })
                    .then(res => {
                        setLoading(false);
                        console.log("Logout", res.data)
                    })
            }
        });
        return () => {
            setLoading(true);
            unSubcribe();
        };
    }, []);
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }


    const appInfo = {
        user,
        loading,
        signIn,
        setUser,
        updateProfiles,
        logOut,
        loginWithGoogle,
        createUser,
    }
    return (
        <AuthContext.Provider value={appInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;