import { Link, useLoaderData } from "react-router-dom";

const AssignmentDetails = () => {
    const { _id, thumbnailUrl, title, marks, difficulty, description, dueDate } = useLoaderData();

    return (
        <div className="max-w-3xl mx-auto p-6 bg-base-100 shadow-md rounded-lg border border-gray-200 mt-10">
            <h3 className="text-3xl text-center text-black font-bold my-4 dark:text-white">Assignment Details</h3>
            {/* Thumbnail */}
            <figure className="overflow-hidden rounded-lg mb-6">
                <img
                    src={thumbnailUrl}
                    alt={title}
                    className="w-full h-64 object-cover"
                />
            </figure>

            {/* Title and Details */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold mb-2">{title}</h1>
                <p className="text-sm text-gray-600  dark:text-slate-200">
                    <span className="font-medium">Marks:</span> {marks}
                </p>
                <p className="text-sm text-gray-600">
                    <span className="font-medium dark:text-slate-200">Difficulty:</span>{' '}
                    <span
                        className={`badge ${difficulty === 'easy'
                            ? 'badge-success'
                            : difficulty === 'medium'
                                ? 'badge-warning'
                                : 'badge-error'
                            }`}
                    >
                        {difficulty}
                    </span>
                </p>
                <p className="text-sm text-gray-600 dark:text-slate-200">
                    <span className="font-medium">Due Date:</span> {dueDate}
                </p>
            </div>

            {/* Description */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Description</h2>
                <p className="text-gray-700 leading-6 dark:text-slate-200">{description}</p>
            </div>

            {/* Back Button */}
            <div className="text-right">
                <Link to={`/take-assignment/${_id}`}>
                    <button className="btn btn-primary w-full">Take Assignment</button></Link>
            </div>
        </div>
    );
};

export default AssignmentDetails;