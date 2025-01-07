
import { useState } from "react";
import Swal from "sweetalert2";


const CreateAssignment = () => {
    const [dueDate, setDueDate] = useState("");
    console.log(dueDate);
    const handleSubmit = e => {
        e.preventDefault()

        const formData = new FormData(e.target)
        console.log(formData);
        const initialData = Object.fromEntries(formData.entries())
        console.log(initialData);
        fetch('http://localhost:5000/assigment', {
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
                        title: "Your Assignment has been Added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // navigate('/posted-jobs')
                }
            })
    }
    return (
        <div className="max-w-2xl mx-auto mt-10 p-8 bg-red-500 text-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Create Assignment</h2>
            <form onSubmit={handleSubmit}>
                {/* Title */}
                <div className="form-control mb-4">
                    <label className="label font-medium">Title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter assignment title"
                        className="input text-black input-bordered w-full"
                    />
                </div>

                {/* Description */}
                <div className="form-control mb-4">
                    <label className="label font-medium">Description</label>
                    <textarea
                        name="description"
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
                        placeholder="Enter thumbnail image URL"
                        className="input text-black input-bordered w-full"
                    />
                </div>

                {/* Difficulty Level */}
                <div className="form-control mb-4">
                    <label className="label font-medium">Difficulty Level</label>
                    <select
                        name="difficulty"
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
                    <input type="date" value={dueDate}
                        name="dueDate"
                        onChange={(e) => setDueDate(e.target.value)}
                        className="input  text-black input-bordered w-full" />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button className="btn btn-primary w-full">Submit Assignment</button>
                </div>
            </form>
        </div>
    );
};

export default CreateAssignment;