import Faq from "./Faq";
import Feature from "./Feature";
import Hero from "./Hero";
import Newsletter from "./newsletter";
import RecantAss from "./RecantAss";


const Home = () => {
    return (
        <div >
            <Hero></Hero>
            <Feature></Feature>
            <RecantAss></RecantAss>
            <Faq></Faq>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;