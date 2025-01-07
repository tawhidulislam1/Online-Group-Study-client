import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Assignment = () => {
    const [assignments, setAssignments] = useState([])
    axios.get('http://localhost:5000/assignment')
        .then(res => setAssignments(res.data))
    return (
        <div className="my-10">
            <div>
                <h3 className="text-3xl text-center text-black font-bold">All assignment {assignments.length}</h3>
                <div className="text-right">
                    <Link to={'/create-assignment'} className="btn btn-neutral text-right">Create Assignment</Link>
                </div>
                <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {
                        assignments.map(assignment => <div key={assignment._id}>

                            <div className="card bg-base-100 shadow-md border border-gray-200 rounded-lg">
                                <figure className="overflow-hidden h-48">
                                    <img
                                        src={assignment.thumbnailUrl}
                                        alt={assignment.title}
                                        className="w-full h-full object-cover"
                                    />
                                </figure>
                                <div className="card-body p-4">
                                    <h2 className="card-title text-lg font-semibold">{assignment.title}</h2>
                                    <p className="text-sm text-gray-600">
                                        <span className="font-medium">Marks:</span> {assignment.marks}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <span className="font-medium">Difficulty:</span>{' '}
                                        <span
                                            className={`badge ${assignment.difficulty === 'easy'
                                                ? 'badge-success'
                                                : assignment.difficulty === 'medium'
                                                    ? 'badge-warning'
                                                    : 'badge-error'
                                                }`}
                                        >
                                            {assignment.difficulty}
                                        </span>
                                    </p>
                                    <div className="card-actions justify-end mt-4">
                                        <button
                                            className="btn btn-sm btn-outline"
                                        // onClick={() => onView(assignment)}
                                        >
                                            View
                                        </button>
                                        <button
                                            className="btn btn-sm btn-primary"
                                        // onClick={() => onUpdate(assignment)}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="btn btn-sm btn-error"
                                        // onClick={() => onDelete(assignment)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Assignment;