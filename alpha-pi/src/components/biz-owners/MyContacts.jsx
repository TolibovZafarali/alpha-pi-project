import { Link, useParams } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import { getItem, setItem } from "../utils/localStorage";
import { useState } from "react";
import BackToDashboard from "./BackToDashboard";
import "./AddContact.css"

const MyContacts = () => {
    
    const { username } = useParams();

    const users = getItem("users");
    const index = users.findIndex(user => user.userName === username);

    const [ myContacts, setMyContacts ] = useState(users[index]?.myContacts || []);

    const handleRemove = (idToRemove) => {
        const updatedContacts = myContacts.filter(contact => contact.id !== idToRemove);

        setMyContacts(updatedContacts);

        users[index].myContacts = updatedContacts;
        setItem("users", users);
    }
    
    return (
        <div className="wrapper">
            <Header />

            <main className="my-contacts-main">
                
                <h1>Your contacts:</h1>

                <div className="contact-cards">
                    {users[index].myContacts && users[index].myContacts.map(contact => (
                        <div className="my-contact">
                            <img src="/contact.svg" alt="Contact Image" />

                            <h3>{contact.name}</h3>
                            <p>{contact.email}</p>
                            <p>{contact.phone}</p>

                            <button onClick={() => handleRemove(contact.id)}>Remove</button>
                        </div>
                    ))}
                </div>

                <div className="back-and-add">
                    <Link to={`/dashboard/my-contacts/${username}/add-contact`}>
                        <button className="add-location-btn">
                            <img src="/add-contact.svg" alt="Add Contact Image" />
                            <h1>Add Contact</h1>                            
                        </button>
                    </Link>

                    <BackToDashboard username={username} />
                </div>
            </main>

            <Footer />
        </div>
    );
}
 
export default MyContacts;