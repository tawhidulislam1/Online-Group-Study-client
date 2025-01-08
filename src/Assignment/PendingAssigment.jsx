import { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import axios from "axios";

const PendingAssigment = () => {
    const { user } = useContext(AuthContext);
    const [assignments, setAssignments] = useState([]);
    const [selectedAssignment, setSelectedAssignment] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/assignment-get?status=pending`)
            .then(res => setAssignments(res.data))
            .catch(error => console.error("Error fetching assignments:", error));
    }, []);

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
                        <form>
                            <div className="form-control mb-4">
                                <label className="label font-medium">Thumbnail Image URL</label>
                                <input
                                    type="url"
                                    name="thumbnailUrl"
                                    placeholder="Enter thumbnail image URL"
                                    className="input text-black input-bordered w-full"
                                />
                            </div>

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
