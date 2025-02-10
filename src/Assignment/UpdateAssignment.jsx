import { useContext, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const UpdateAssignment = () => {
    // eslint-disable-next-line no-unused-vars
    const [dueDates, setDueDate] = useState("");
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const { _id, thumbnailUrl, title, marks, difficulty, description, dueDate } = useLoaderData();
    const handleUpdate = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        console.log(formData);
        const initialData = Object.fromEntries(formData.entries())
        console.log(initialData);
        const marks = initialData.marks;

        if (marks > 200) {
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "Marks cannot be more than 200",
                showConfirmButton: true,
            });
            return;
        }
        fetch(`https://online-group-study-server-bay.vercel.app/assignment/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(initialData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: "Assignment Update Successfully!",
                        icon: "success"
                    });
                }
                navigate("/assignment")
                console.log(data);
            })

    }
    return (
        <div className="max-w-2xl mx-auto mt-10 p-8 bg-[#5d4e50] text-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Update Assignment</h2>
            <form onSubmit={handleUpdate}>
                {/* Title */}
                <div className="form-control mb-4">
                    <label className="label font-medium">Title</label>
                    <input
                        type="text"
                        defaultValue={title}
                        name="title"
                        placeholder="Enter assignment title"
                        className="input text-black input-bordered w-full"
                    />
                    <input
                        type="hidden"
                        name="email"
                        value={user.email}
                        placeholder="Enter assignment title"
                        className="input text-black input-bordered w-full"
                    />
                </div>

                {/* Description */}
                <div className="form-control mb-4">
                    <label className="label font-medium">Description</label>
                    <textarea
                        name="description"
                        defaultValue={description}
                        placeholder="Enter assignment description"
                        className="textarea  text-black textarea-bordered w-full"
                        rows="4"
                    ></textarea>
                </div>

                {/* Marks */}
                <div className="form-control mb-4">
                    <label className="label font-medium">Marks</label>
                    <input
                        type="number"
                        name="marks"
                        defaultValue={marks}
                        placeholder="Enter total marks"
                        className="input  text-black input-bordered w-full"
                    />
                </div>

                {/* Thumbnail URL */}
                <div className="form-control mb-4">
                    <label className="label font-medium">Thumbnail Image URL</label>
                    <input
                        type="url"
                        name="thumbnailUrl"
                        defaultValue={thumbnailUrl}
                        placeholder="Enter thumbnail image URL"
                        className="input text-black input-bordered w-full"
                    />
                </div>

                {/* Difficulty Level */}
                <div className="form-control mb-4">
                    <label className="label font-medium">Difficulty Level</label>
                    <select
                        name="difficulty" defaultValue={difficulty}
                        className="select  text-black select-bordered w-full"
                    >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>

                {/* Due Date */}
                <div className="form-control mb-6">
                    <label className="label font-medium">Due Date</label>
                    {/* <DatePicker
                    selected={dueDate}
                    onChange={(date) => setDueDate(date)}
                    className="input input-bordered w-full"
                    placeholderText="Select due date"
                /> */}
                    <input type="date"
                        name="dueDate"
                        defaultValue={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className="input  text-black input-bordered w-full" />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button className="btn bg-[#f8c312] w-full">Update Assignment</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateAssignment;