import { useParams } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const BusinessProfile = ({ allProfiles }) => {
    
    const { name } = useParams();

    const profile = allProfiles.find(p => p.name === name);
    
    return (
        <div className="wrapper">
            <Header />

            <main>
                <img src={profile.logo} alt="logo"></img>

                <h1>{profile.name}</h1>

                <p>{profile.description}</p>
            </main>

            <Footer />
        </div>
    );
}
 
export default BusinessProfile;