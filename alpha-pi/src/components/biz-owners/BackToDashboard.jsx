import { Link } from "react-router-dom";

const BackToDashboard = ({ username }) => {
    return (
        <div>
            <Link to={`/dashboard/${username}`}>
                <button className="back-to-dashboard">
                    <h1>Back to Dashboard</h1>
                </button>
            </Link>
        </div>
    );
}
 
export default BackToDashboard;