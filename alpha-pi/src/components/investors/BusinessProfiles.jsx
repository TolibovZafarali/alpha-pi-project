import Footer from "../Footer";
import Header from "../Header";
import data from "../../data/BusinessProfilesData.json"
import { getItem } from "../utils/localStorage";

const BusinessProfiles = () => {
    
    const users = getItem("users") || [];

    const postedProfiles = users.filter(profile => profile.posted === true);
    


    return (
        <div className="wrapper">
            <Header />

            <main className="business-profiles-main">
                
                
                <div>
                    {users && postedProfiles.map(profile => (
                        <div className="business-profile-btn">
                            <img src={profile.logoURL} />
                            <h2>{profile.nameOfBiz}</h2>
                            <hr />
                            <p>{profile.description}</p>
                        </div>

                    ))}
                    
                    {data.map(profile => (  
                            <div className="business-profile-btn">
                                <img src={profile.logo} />
                                <h2>{profile.name}</h2>
                                <hr />
                                <p>{profile.description}</p>
                            </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
 
export default BusinessProfiles;