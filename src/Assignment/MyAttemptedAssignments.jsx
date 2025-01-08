import { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import useAxiosSecure from "../Hook/useAxiosSecure";

const MyAttemptedAssignments = () => {
    const { user } = useContext(AuthContext)
    const [assignments, setAssignments] = useState([])
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/assignment-post?email=${user.email}`)
            .then((res) => {
                setAssignments(res.data);
            })
    }, [user.email, axiosSecure]);

    console.log(assignments);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> #
                            </th>
                            <th>Assignement Title</th>
                            <th>Submitted Date</th>
                            <th>Status</th>
                            <th>assignment marks</th>
                            <th>obtained marks</th>
                            <th>feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            assignments.map((assignment, index) => <>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="font-bold">{assignment.title}</div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{assignment.submittedAt}</div>

                                    </td>
                                    <td>
                                        <div className="font-bold">{assignment.status}</div>

                                    </td>
                                    <td>
                                        <div className="font-bold">{assignment.marks}</div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{assignment.obtainMarks}</div>
                                    </td>
                                    <th>
                                        <div className="font-bold">{assignment.feedback}</div>

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