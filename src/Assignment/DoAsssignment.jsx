import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const DoAsssignment = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const userEmail = user?.email || "";
    const { id } = useParams();
    console.log(id);
    const handleSubmit = e => {
        e.preventDefault()

        const formData = new FormData(e.target)
        console.log(formData);
        const initialData = Object.fromEntries(formData.entries())
        console.log(initialData);


        fetch('https://online-group-study-server-bay.vercel.app/assignment-post', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(initialData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Your Assignment has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/attempted-assignments')
                }
            })
    }
    return (
        <div className="max-w-2xl mx-auto mt-10 p-8 bg-red-500 text-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Create Assignment</h2>
            <form onSubmit={handleSubmit}>
                {/* Title */}
                <div className="form-control mb-4">
                    <label className="label font-medium"> google docs link</label>
                    <input
                        type="text"
                        name="docslink"
                        placeholder="Enter assignment title"
                        className="input text-black input-bordered w-full"
                        required
                    />
                    <input
                        type="hidden"
                        name="email"
                        value={userEmail}
                        placeholder="Enter assignment title"
                        className="input text-black input-bordered w-full"
                    />
                    <input
                        type="hidden"
                        name="job_id"
                        value={id}
                        placeholder="Enter assignment title"
                        className="input text-black input-bordered w-full"
                    />
                </div>
                {/* Description */}
                <div className="form-control mb-4">
                    <label className="label font-medium">quick note</label>
                    <textarea
                        name="quicknote"
                        placeholder="Enter assignment description"
                        className="textarea  text-black textarea-bordered w-full"
                        rows="4"
                        required
                    ></textarea>
                </div>



                {/* Submit Button */}
                <div className="text-center">
                    <button className="btn btn-primary w-full">Submit Assignment</button>
                </div>
            </form>
        </div>
    );
};

export default DoAsssignment;