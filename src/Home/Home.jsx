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
            <Newsletter></Newsletter>
            <RecantAss></RecantAss>
            <Faq></Faq>
        </div>
    );
};

export default Home;