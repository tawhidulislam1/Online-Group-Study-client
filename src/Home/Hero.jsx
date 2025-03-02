

const Hero = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(https://i.ibb.co.com/x5Jc3Cq/360-F-698152816-iofj0-Eao-Jp6jj-Ks-Hk-MSo-AEawmb-Kg3at0.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold   dark:text-white">Start With A Note</h1>
                    <p className="mb-5">
                        Don&apos;t Miss The Chance
                    </p>
                    <button className="btn bg-[#f8c312] btn-wide  dark:text-black rounded-2xl">Start Learning</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;