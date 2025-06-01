import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import { getItem, setItem } from "../utils/localStorage";
import { useState } from "react";
import states from "../../data/StatesAndWebsites.json"
import "./AddLocation.css";

const AddLocation = () => {
    
    const navigate = useNavigate();

    const { username } = useParams();

    const users = getItem("users");
    const index = users.findIndex(user => user.userName === username);
    
    const [ possibleLocations, setPossibleLocations ] = useState(users[index].possibleLocations || []);
    
    const [ streetAddress, setStreetAddress ] = useState("");
    const [ city, setCity ] = useState("");
    const [ selectedState, setSelectedState ] = useState("");
    const [ zipCode, setZipCode ] = useState("");
    
    const [ companyName, setCompanyName ] = useState("");
    const [ companyPhone, setCompanyPhone ] = useState("");

    const [ answer1, setAnswer1 ] = useState("");
    const [ answer2, setAnswer2 ] = useState("");
    const [ answer3, setAnswer3 ] = useState("");
    
    const handleAddLocation = (e) => {
        e.preventDefault();

        const newLoc = { id: Date.now(), streetAddress, city, state: selectedState, zipCode, companyName, companyPhone, answer1, answer2, answer3};

        setPossibleLocations(prevData => [...prevData, newLoc]);

        users[index].possibleLocations = [...possibleLocations, newLoc];
        setItem("users", users)

        navigate(`/dashboard/possible-locations/${username}`);
    }
    
    return (
        <div className="wrapper">
            <Header />

            <main className="add-location-main">
                <h1>Let's add a location:</h1>

                <form className="add-location-form" onSubmit={handleAddLocation}>
                    <label className="form-label">Street address:
                        <input
                            type="text"
                            value={streetAddress}
                            onChange={e => setStreetAddress(e.target.value)}
                        />
                    </label>
                    <label className="form-label">City:
                        <input
                            type="text"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                    </label>
                    <label className="form-label">State:
                        <select value={selectedState} onChange={e => setSelectedState(e.target.value)}>
                            {states.map((state) => (
                                <option key={state.id} value={state.state}>{state.state}</option>
                            ))}
                        </select>
                    </label>

                    <label className="form-label">Zip Code:
                        <input
                            type="number"
                            value={zipCode}
                            onChange={e => setZipCode(e.target.value)}
                        />
                    </label>
                    
                    <h3>Contact Info</h3>

                    <label className="form-label">Company name:
                        <input
                            type="text"
                            value={companyName}
                            onChange={e => setCompanyName(e.target.value)}
                        />
                    </label>
                    
                    <label className="form-label">Company phone:
                        <input
                            type="number"
                            value={companyPhone}
                            onChange={e => setCompanyPhone(e.target.value)}
                        />
                    </label>
                    
                    <h3>Questions to ask:</h3>
                    
                    <label className="form-label">1. What's the all-in cost?
                        <ul>
                            <li>Base rent, CAM/NNN fees, property taxes, insurance, utilities, common-area maintenance, etc.</li>
                        </ul>
                        <textarea
                            value={answer1}
                            onChange={e => setAnswer1(e.target.value)}
                        />
                    </label>
                    <label className="form-label">2. What's the lease deal-breaker stuff?
                        <ul>
                            <li>Term length, renewal options, scheduled rent bumps (escalations), and any early-exit or sublease clauses.</li>
                        </ul>
                        <textarea
                            value={answer2}
                            onChange={e => setAnswer2(e.target.value)}
                        />
                    </label>
                    <label className="form-label">What can I actually do with—and to—this space?
                        <ul>
                            <li>Zoning/use restrictions (retail vs. office vs. restaurant), hours of operation, signage rules.</li>
                            <li>Who pays for build-outs, repairs, and ongoing maintenance—yours or theirs—when stuff breaks or you want to customize.</li>
                        </ul>
                        <textarea
                            value={answer3}
                            onChange={e => setAnswer3(e.target.value)}
                        />
                    </label>

                    <div className="form-actions">
                       <button type="submit" className="btn submit-btn" disabled={!streetAddress || !city || !selectedState || !zipCode || !answer1 || !answer2 || !answer3}>
                            Add Location
                        </button>
                    </div>
                </form>
            </main>

            <Footer />
        </div>
    );
}
 
export default AddLocation;