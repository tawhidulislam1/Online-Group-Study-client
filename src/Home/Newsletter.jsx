const Newsletter = () => {
    return (
        <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 my-12  dark:bg-base-200 ">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl  dark:text-white">
                    📬 Subscribe to Our Newsletter
                </h2>
                <p className="mt-4 text-lg text-gray-600  dark:text-slate-200">
                    Stay updated with the latest assignments, news, and exclusive offers!
                </p>

                <div className="mt-8 sm:flex sm:justify-center">
                    <div className="flex rounded-md shadow-sm">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 rounded-l-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        <button
                            className="px-6 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition duration-300"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
