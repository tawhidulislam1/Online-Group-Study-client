

const Feature = () => {
    return (
        <div className="my-12">
            <h2 className="text-xl font-semibold text-red-500 text-center my-1" >The benefits of studying online in one of our study groups</h2>
            <h2 className="text-5xl font-bold text-black text-center mb-10  dark:text-white">“Just” a study room? Think again!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="card bg-base-100 border-2 border-slate-50 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co.com/gdJX6nh/61a7f1ea3242ca4e62169754-6188e229b9d0ec413fc03da2-Group-97-min.png"
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title  dark:text-white">The &ldquo;good&ldquo; kind of
                            peer pressure
                        </h2>
                        <p>You know how your parents always say peer pressure is bad? Well… when it comes to studying, they’re wrong. Studying with peers helps you get better grades - and that’s scientifically proven.</p>
                        <div className="card-actions">
                            <button className="btn  text-[#4b3734] bg-[#e7a438]  hover:dark:text-white">See more</button>

                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 border-2 border-slate-50 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co.com/28JjDzj/61a7f1ea7cb8166ce8b029de-61895872dd6b3875c19b7a12-Group-99-min.png"
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title dark:text-white">24/7 support, all year round
                        </h2>
                        <p>Find a study buddy (or a procrastinate-mate), access exclusive boot camps, chat with tutors, or ask for community help. When you need a break, take a 5 min guided mindfulness session.</p>
                        <div className="card-actions">
                            <button className="btn  text-[#4b3734] bg-[#e7a438] hover:dark:text-white ">See more</button>

                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 border-2 border-slate-50 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co.com/h2RgtNZ/61a7f1eacf1ab8ca3819eab9-61895898b53f191cf9513f14-Group-98-min.png"
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title dark:text-white">Studying,
                            reloaded
                        </h2>
                        <p>Let’s be honest, any task is more fun when you know there’s a reward at the end of it. We’ll track your progress and gamify your study sessions – all you have to do is set session goals, start the timer and you’ll get rewarded.
                        </p>
                        <div className="card-actions">
                            <button className="btn  text-[#4b3734] bg-[#e7a438] hover:dark:text-white">See more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;