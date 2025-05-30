import { Link } from "react-router-dom";
import { getItem, setItem } from "../utils/localStorage";
import { useState } from "react";
import "./ToggleSwitch.css"

const Navigator = ({ username }) => {
    
    const users = getItem("users");
    const index = users.findIndex(user => user.userName === username);

    const [ posted, setPosted ] = useState(users[index]?.posted || false);

    const handleToggle = () => {
        const newPosted = !posted;
        setPosted(newPosted);

        users[index].posted = newPosted;
        setItem("users", users);
    }
    
    return (
        <div className="navigator">
                <div className="nav-buttons">
                    <Link to={`/dashboard/possible-locations/${username}`}>
                        <button className="button-27">Possible Locations</button>
                    </Link>
                    
                    <hr/>

                    <Link to={`/dashboard/search-for-mentors/${username}`}>
                        <button className="button-27">Search for mentors</button>
                    </Link>
                    
                    <hr/>

                    <Link to={`/dashboard/my-contacts/${username}`}>
                        <button className="button-27">My contacts</button>
                    </Link>
                    
                    <hr/>

                    <div className="switch-and-span">
                        <label className="posted-toggle-switch">
                            <input
                                type="checkbox"
                                checked={posted}
                                onChange={handleToggle}
                            />
                            <span className="slider round" />
                        </label>
                        <span className="toggle-label">
                            {posted ? "Profile Posted" : "Post Your Profile"}
                        </span>
                    </div>
                </div>
        </div>
    );
}
 
export default Navigator;