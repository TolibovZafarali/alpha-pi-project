import { Link, useParams } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import { getItem, setItem } from "../utils/localStorage";
import { useState } from "react";
import BackToDashboard from "./BackToDashboard";
import "./PossibleLocations.css"

const PossibleLocations = () => {
    
    const { username } = useParams();

    const users = getItem("users");
    const index = users.findIndex(user => user.userName === username);

    const [ possibleLocations, setPossibleLocations ] = useState(users[index]?.possibleLocations || []);

    const handleRemove = (idToRemove) => {
        const updatedLocations = possibleLocations.filter(location => location.id !== idToRemove);

        setPossibleLocations(updatedLocations);

        users[index].possibleLocations = updatedLocations;
        setItem("users", users);
    }

    return (
        <div className="wrapper">
            <Header />

            <main className="possible-locations-main">
                <h1>Your locations:</h1>

                <div className="location-buttons">
                    {users[index].possibleLocations && users[index].possibleLocations.map(location => (
                            <div className="possible-location">
                                <img src="/location.svg" alt="Location Image"/>
                                <p>{location.streetAddress}, {location.city}, {location.state} {location.zipCode}</p>

                                <h3>Contact info:</h3>
                                <p><strong>Name: </strong>{location.companyName}</p>
                                <p><strong>Phone: </strong>{location.companyPhone}</p>

                                <h3>Q&A</h3>

                                <h5>What's the all-in cost?</h5>
                                <p>{location.answer1}</p>

                                <h5>What's the lease deal-breaker stuff?</h5>
                                <p>{location.answer2}</p>
                                
                                <h5>What can I actually do with—and to—this space?</h5>
                                <p>{location.answer3}</p>

                                <button onClick={() => handleRemove(location.id)}>Remove</button>
                            </div>
                    ))}
                </div>

                <div className="back-and-add">
                    <Link to={`/dashboard/possible-locations/${username}/add-location`}>
                        <button className="add-location-btn">
                            <img src="/add-location-white.svg" />
                            <h1>Add Location</h1>
                        </button>
                    </Link>

                <BackToDashboard username={username} />
                </div>
            </main>

            <Footer />
        </div>
    );
}
 
export default PossibleLocations;