import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import Swal from "sweetalert2";

const Assignment = () => {
    const [assignments, setAssignments] = useState([])
    const [search, setSearch] = useState("")
    const navigate = useNavigate();

    const { user } = useContext(AuthContext)
    const userEmail = user?.email
    useEffect(() => {
        axios.get('https://online-group-study-server-bay.vercel.app/assignment')
            .then(res => setAssignments(res.data));
    }, [])

    useEffect(() => {
        fetch(`https://online-group-study-server-bay.vercel.app/assignment?serachParams=${search}`)
            .then(res => res.json())
            .then(data => {
                setAssignments(data);
            })
    }, [search])
    console.log(search);
    const handleDelete = (id, email) => {
        if (userEmail !== email) {
            Swal.fire({
                icon: "error",
                title: "Sorry",
                text: "Your Can't Delete This. Cuz You Can't Create This!",
            });
            return;
        }
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://online-group-study-server-bay.vercel.app/assignment/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaning = assignments.filter(cof => cof._id !== id);
                            setAssignments(remaning)
                        }
                    })
            }
        });

    }
    const handleUpdate = (id, email) => {
        if (userEmail !== email) {
            Swal.fire({
                icon: "error",
                title: "Sorry",
                text: "Your Can't Edit This. Becasue You Can't Create This!",
            });
            return;
        }
        return navigate(`/update-assingment/${id}`);

    }
    const handleSort = () => {
        const sortedCampaigns = [...assignments].sort((a, b) => a.marks - b.marks);
        setAssignments(sortedCampaigns);
    };;
    return (
        <div className="my-10">
            <div>
                <h3 className="text-3xl text-center text-black font-bold  dark:text-white">All Assignment</h3>
                <div className="text-center">
                    <div className="flex justify-center items-center py-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="input input-bordered text-black w-64 px-4 py-2"
                            onChange={(e) => setSearch(e.target.value)} // Handle input change (e.g., search logic)
                        />
                        <button className="btn bg-[#f8c312] ml-2  dark:text-white">Search</button>
                    </div>
                </div>
                <div className="flex justify-end mb-4">
                    <button
                        onClick={handleSort}
                        className="px-4 py-2 text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Sort by Minimum marks
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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
                                    <h2 className="card-title text-lg font-semibold  dark:text-white">{assignment.title}</h2>
                                    <p className="text-sm text-gray-600  dark:text-slate-200">
                                        <span className="font-medium">Marks:</span> {assignment.marks}
                                    </p>
                                    <p className="text-sm text-gray-600 dark:text-slate-200">
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
                                        <Link to={`/assignment-details/${assignment._id}`}>
                                            <button
                                                className="btn btn-sm btn-outline"
                                            >
                                                View
                                            </button></Link>
                                        <button
                                            className="btn btn-sm btn-primary"
                                            onClick={() => handleUpdate(assignment._id, assignment.email)}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="btn btn-sm btn-error"
                                            onClick={() => handleDelete(assignment._id, assignment.email)}
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