import Footer from "../Footer";
import Header from "../Header";
import mentors from "../../data/Mentors.json"
import BackToDashboard from "./BackToDashboard";
import { useParams } from "react-router-dom";
import "./SearchMentors.css"

const SearchMentors = () => {
    
    const { username } = useParams();

    return (
        <div className="wrapper">
            <Header />

            <main className="search-mentors-main">
                {mentors.map((person, index) => (
                    <div
                        key={index}
                        className={`mentor-card ${person.available ? "available" : "unavailable"}`}
                    >
                        <img src={person.img} alt={`${person.name}'s profile`}/>
                        
                        <h3>{person.name}</h3>
                        <p><strong>Industry: </strong>{person.industry}</p>

                        <h4>Contact info:</h4>
                        <p><strong>Email: </strong>{person.email}</p>
                        <p><strong>Phone: </strong>{person.phone}</p>
                    </div>
                ))}

                <BackToDashboard username={username} />
            </main>

            <Footer />
        </div>
    );
}
 
export default SearchMentors;