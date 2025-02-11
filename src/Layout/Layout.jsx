import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Layout = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto">
                <Header></Header>
                <div className="mt-24">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer></>
    );
};

export default Layout;