import AuthContext from "./AuthContext";


// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

    const appInfo = {
        name: "tawhid",
    }
    return (
        <AuthContext.Provider value={appInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;