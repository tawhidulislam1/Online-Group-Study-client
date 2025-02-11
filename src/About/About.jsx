import about from "../assets/aboutme.png";

const About = () => {
    return (
        <div className="min-h-screen bg-base-100 text-base-content py-10 px-4 lg:px-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
                    An online platform designed to make learning and collaboration easier for students
                </p>

                <div className="grid gap-8 lg:grid-cols-2 items-center">
                    <img
                        src={about}
                        alt="About Image"
                        className="rounded-2xl shadow-md w-full h-auto object-cover"
                    />

                    <div>
                        <p className="text-gray-700 dark:text-gray-400 mb-4">
                            Welcome to <strong>Group Study</strong>, an online platform designed to make learning and collaboration easier for students.
                            Our goal is to create a space where students can share assignments, attempt tasks, and enhance their knowledge together.
                        </p>

                        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
                        <p className="text-gray-700 dark:text-gray-400 mb-4">
                            Our mission is to create high-quality, user-friendly applications that solve real-world problems.
                            We focus on innovation, customer satisfaction, and continuous improvement.
                        </p>

                        <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-2">
                            <li>Expert team with strong technical skills</li>
                            <li>Customer-centric approach</li>
                            <li>Reliable and secure solutions</li>
                            <li>Continuous updates and support</li>
                        </ul>

                        <h2 className="text-2xl font-semibold mt-4 mb-2">Our Vision</h2>
                        <p className="text-gray-700 dark:text-gray-400">
                            At Group Study, we envision a future where students can easily connect, collaborate,
                            and grow together academically. Whether you&lsquo;re preparing for exams or working on group projects,
                            our platform ensures a seamless learning experience.
                        </p>
                    </div>
                </div>

                <div className="mt-10 p-6 bg-base-200 rounded-xl shadow-sm text-center">
                    <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                        Have questions or want to work with us? Reach out anytime!
                    </p>
                    <a
                        href="mailto:designwithtawhid@gmail.com"
                        className="inline-block mt-4 btn bg-[#f8c312] hover:text-black  dark:hover:text-white text-white px-6 pt-4 rounded-full hover:opacity-90"
                    >
                        Email Us
                    </a>
                </div>
            </div>
        </div >
    );
};

export default About;
