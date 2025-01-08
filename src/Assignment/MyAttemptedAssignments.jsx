import { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import axios from "axios";

const MyAttemptedAssignments = () => {
    const { user } = useContext(AuthContext)
    const [assignments, setAssignments] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/assignment-post?email=${user.email}`)
            .then(res => setAssignments(res.data))
    }, [user.email])
    console.log(assignments);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Company Info</th>
                            <th>Applicante</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            assignments.map(job => <>
                                <tr key={job._id}>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={job.company_logo}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{job.title}</div>
                                                <div className="text-sm opacity-50">{job.location}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {job.linkdin}
                                        <br />
                                        {job.github}
                                        <br />
                                        {job.resume}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{job.application_email}</span>
                                    </td>
                                    <td>Purple</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">X</button>
                                    </th>
                                </tr>
                            </>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAttemptedAssignments;