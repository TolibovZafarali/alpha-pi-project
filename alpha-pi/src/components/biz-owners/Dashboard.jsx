import { useParams } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import { getItem, setItem } from "../utils/localStorage";
import { useEffect, useState } from "react";
import industries from "../../data/Industries.json"
import Navigator from "./Navigator";
import "./Dashboard.css"

const Dashboard = () => {
    
    const { username } = useParams();
    
    const users = getItem("users");
    const index = users.findIndex(user => user.userName === username);

    
    const [ nameOfBiz, setNameOfBiz ] = useState(users[index]?.nameOfBiz || "");
    const [ description, setDescription ] = useState(users[index]?.description || "");
    const [ industry, setIndustry ] = useState(users[index]?.industry || "");
    const [ logoURL, setLogoURL ] = useState(users[index]?.logoURL || "");
    const [ contactName, setContactName ] = useState(users[index]?.contactName || "");
    const [ contactEmail, setContactEmail ] = useState(users[index]?.contactEmail || "");
    const [ contactPhone, setContactPhone ] = useState(users[index]?.contactPhone || "");
    const [ editMode, setEditMode ] = useState(false);
    
    
    useEffect(() => {
        if (editMode) {
            setNameOfBiz(users[index].nameOfBiz || "");
            setDescription(users[index].description || "");
            setIndustry(users[index].industry || "");
            setLogoURL(users[index].logoURL || "");
            setContactName(users[index].contactName || "");
            setContactEmail(users[index].contactEmail || "");
            setContactPhone(users[index].contactPhone || "");
        }
    }, [editMode]);
    
    const [ profileComplete, setProfileComplete ] = useState((users[index]?.nameOfBiz && users[index]?.description && users[index]?.industry && users[index]?.logoURL && users[index]?.contactName && users[index]?.contactEmail && users[index]?.contactPhone))
    
    if (index === -1) {
        return (
            <div className="wrapper">
                <Header />

                <main>
                    <h1 className="user-not-found">USER NOT FOUND</h1>
                </main>

                <Footer />
            </div>
        )
    }
    

    const previewProfile = () => {
        return (
            <div>
                <div className="logo-and-name">
                    <div>
                        <div className="biz-section">
                            <p>Name of business:</p>
                            <h1>{users[index].nameOfBiz}</h1>
                        </div>

                        <div>
                            <h3>Industry:</h3>
                            <p>{users[index].industry}</p>
                        </div>
                    </div>
                    <div className="biz-section logo-preview" id="logo-with-name">
                        <img src={users[index].logoURL} alt="Logo" onError={e => e.target.src = "https://static.vecteezy.com/system/resources/previews/026/766/386/non_2x/search-no-result-data-document-or-file-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"}/>
                    </div>
                </div>

                <div className="biz-section">
                    <h3>Description:</h3>
                    <p>{users[index].description}</p>
                </div>

                <div className="biz-section contact-info">
                    <h3>Contact Info:</h3>
                    <p><strong>Full name:</strong> {users[index].contactName}</p>
                    <p><strong>Email:</strong> {users[index].contactEmail}</p>
                    <p><strong>Phone number:</strong> {users[index].contactPhone}</p>
                </div>

                
            </div>
        )
    }
    
    const handleSave = (e) => {
        e.preventDefault();

        if (users[index] !== -1) {
            users[index] = {
                ...users[index],
                nameOfBiz,
                description,
                industry,
                logoURL,
                contactName,
                contactEmail,
                contactPhone
            }
        }

        setItem("users", users);
        setProfileComplete(true);
        setEditMode(false);
    }
    
    const fillProfile = () => {
        
        
        return (
            <div>
                <form onSubmit={handleSave}>
                    <label>Name of your business:
                        <input 
                            type="text"
                            value={nameOfBiz}
                            onChange={(e) => setNameOfBiz(e.target.value)}
                            required
                        />
                    </label>

                    <label>Industry:
                        <select value={industry} onChange={(e) => e.target.value !== "Select industry" && setIndustry(e.target.value)}>
                            {industries.map((i, index) => (
                                <option key={index} value={i}>{i}</option>
                            ))}
                        </select>
                    </label>

                    <label>Paste logo image URL:
                        <input
                            type="text"
                            value={logoURL}
                            onChange={(e) => setLogoURL(e.target.value)}
                            placeholder="https://example.com/logo.png"
                            required
                        />
                    </label>


                    <label>Description:
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </label>
                    
                    <hr />

                    <h3>Contact Information:</h3>

                    <label>
                            <input
                                type="text"
                                value={contactName}
                                onChange={(e) => setContactName(e.target.value)}
                                placeholder="Enter your full name"
                                required
                            />
                    </label>
                    
                    <label>
                            <input
                                type="email"
                                value={contactEmail}
                                onChange={(e) => setContactEmail(e.target.value)}
                                placeholder="Enter your email address"
                                required
                            />
                    </label>
                    
                    <label>
                            <input
                                type="number"
                                value={contactPhone}
                                onChange={(e) => setContactPhone(e.target.value)}
                                placeholder="Enter your phone number"
                                required
                            />
                    </label>



                    <input type="submit" value="Save" disabled={!nameOfBiz || !(industry !== "Select industry") || !description || !logoURL || !contactName || !contactEmail || !contactPhone}/>
                </form>
            </div>
        )
    }

    return (
        <div className="wrapper">
            <Header />
            
            <main>
                <div className="dashboard-content">
                    <div className="preview-profile">
                        {profileComplete && !editMode ? (
                            <div>
                                {previewProfile()}
                                <button onClick={() => setEditMode(true)}>Edit</button>
                            </div>
                        ) : (
                            fillProfile()
                        )}
                    </div>

                    <div className="dashboard-navigator">
                        {profileComplete && <Navigator username={username} />}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
 
export default Dashboard;