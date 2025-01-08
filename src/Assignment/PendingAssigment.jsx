import { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const PendingAssigment = () => {
    const { user } = useContext(AuthContext);
    const [assignments, setAssignments] = useState([]);
    const [selectedAssignment, setSelectedAssignment] = useState(null);
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:5000/assignment-get?status=pending`)
            .then(res => setAssignments(res.data))
            .catch(error => console.error("Error fetching assignments:", error));
    }, []);
    const handleMarks = e => {
        e.preventDefault()
        const form = e.target;
        const obtainMarks = form.obtainMarks.value;
        const feedback = form.feedback.value;
        const updateStatus = "Complete";
        console.log(updateStatus, obtainMarks);
        const data = {
            feedback: feedback,
            status: updateStatus,
            obtainMarks: obtainMarks,
        };

        fetch(`http://localhost:5000/assignment-post/${selectedAssignment._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: "Assignment marks Update Successfully!",
                        icon: "success"
                    });
                    setSelectedAssignment(null);
                    navigate("/peding-assignments")
                }
                console.log(data);
            })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* Table Head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Assignment Title</th>
                            <th>Examiners Name</th>
                            <th>Assignment Marks</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assignments.map((assignment, index) => (
                            <tr key={assignment._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="font-bold">{assignment.title}</div>
                                </td>
                                <td>
                                    <div className="font-bold">{user?.displayName}</div>
                                </td>
                                <td>
                                    <div className="font-bold">{assignment.marks}</div>
                                </td>
                                <td>
                                    <button
                                        className="btn"
                                        onClick={() => setSelectedAssignment(assignment)}
                                    >
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {selectedAssignment && (
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle" open>
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Google Docs: <a target="_blank" className="link" href={selectedAssignment.docslink}>{selectedAssignment.docslink}</a></h3>
                        <p className="py-4">Note:{selectedAssignment.quicknote || "No additional notes provided."}</p>
                        <form onSubmit={handleMarks}>
                            <div className="form-control mb-4">
                                <label className="label font-medium">Given Marks</label>
                                <input
                                    type="number"
                                    name="obtainMarks"
                                    placeholder="Enter Given Marks"
                                    className="input text-black input-bordered w-full" required
                                />
                            </div>
                            <div className="form-control mb-4">
                                <label className="label font-medium">Feedback</label>
                                <input
                                    type="text"
                                    name="feedback"

                                    placeholder="Enter Given Marks"
                                    className="input text-black input-bordered w-full" required
                                />
                            </div>
                            <button type="submit" className="btn btn-secondary">submit</button>

                        </form>
                        <div className="modal-action">
                            <button className="btn" onClick={() => setSelectedAssignment(null)}>
                                Close
                            </button>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default PendingAssigment;
