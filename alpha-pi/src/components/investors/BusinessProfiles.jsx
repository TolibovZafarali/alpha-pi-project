import Footer from "../Footer";
import Header from "../Header";
import data from "../../data/BusinessProfilesData.json";
import { getItem } from "../utils/localStorage";
import { Link } from "react-router-dom";

const BusinessProfiles = () => {
    
    const users = getItem("users") || [];

    const postedProfiles = users.filter(profile => profile.posted === true);
    


    return (
        <div className="wrapper">
            <Header />

            <main className="business-profiles-main">
                
                
                <div>
                    {postedProfiles.map(profile => (
                        <Link to={`/business-profiles/${profile.nameOfBiz}`} key={`user-${profile.nameOfBiz}`}>
                            <div className="business-profile-btn">
                                <img src={profile.logoURL} />
                                <h2>{profile.nameOfBiz}</h2>
                                <hr />
                                <p>{profile.description}</p>
                            </div>
                        </Link>

                    ))}

                    {data.map(profile => (
                        <Link to={`/business-profiles/${profile.name}`} key={`static-${profile.name}`}>
                            <div className="business-profile-btn">
                                <img src={profile.logo} />
                                <h2>{profile.name}</h2>
                                <hr />
                                <p>{profile.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
 export default BusinessProfiles;