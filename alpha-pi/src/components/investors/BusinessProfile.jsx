import { useParams } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { getItem } from "../utils/localStorage";
import "./BusinessProfile.css";

const BusinessProfile = ({ allProfiles }) => {
    const { name } = useParams();

    const users = getItem("users") || [];
    const postedProfiles = users.filter(profile => profile.posted === true);

    const localProfile = postedProfiles.find(p => p.nameOfBiz === name);
    const staticProfile = allProfiles.find(p => p.name === name);

    const profile = localProfile || staticProfile;

    if (!profile) {
        return (
            <div className="wrapper">
                <Header />
                <main className="business-profile-main">
                    <h1>PROFILE NOT FOUND</h1>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="wrapper">
            <Header />
            <main className="business-profile-main">
                <div className="business-profile-card">
                    <img src={localProfile ? profile.logoURL : profile.logo} alt="logo" />
                    <h1>{localProfile ? profile.nameOfBiz : profile.name}</h1>
                    {localProfile && profile.industry && (
                        <p className="industry">{profile.industry}</p>
                    )}
                    <hr />
                    <p>{profile.description}</p>
                    {localProfile && (
                        <>
                            <hr />
                            <div className="contact-section">
                                <h2>Contact information</h2>
                                <p><strong>Contact name:</strong> {profile.contactName}</p>
                                <p><strong>Email:</strong> {profile.contactEmail}</p>
                                <p><strong>Phone:</strong> {profile.contactPhone}</p>
                            </div>
                        </>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );};

export default BusinessProfile;
