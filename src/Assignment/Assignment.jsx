import { Link } from "react-router-dom";

const Assignment = () => {
    return (
        <div>
            <h3>All assignment</h3>
            <Link to={'/create-assignment'} className="btn btn-neutral">Create Assignment</Link>
        </div>
    );
};

export default Assignment;