import { useNavigate, useParams } from "react-router-dom";
import { getItem, setItem } from "../utils/localStorage";
import { useState } from "react";
import "./AddLocation.css";
import Header from "../Header";
import Footer from "../Footer";


const AddContact = () => {
    
    const navigate = useNavigate();

    const { username } = useParams();

    const users = getItem("users");
    const index = users.findIndex(user => user.userName === username);

    const [ myContacts, setMyContacts ] = useState(users[index].myContacts || []);

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phone, setPhone ] = useState("");

    const handleAddContact = (e) => {
        e.preventDefault();

        const newContact = { id: Date.now(), name, email, phone };

        setMyContacts(prevData => [...prevData, newContact]);

        users[index].myContacts = [...myContacts, newContact];
        setItem("users", users);

        navigate(`/dashboard/my-contacts/${username}`);
    }
    
    return (
        <div className="wrapper">
            <Header />

            <main className="add-location-main">
                <h1>Let's add a contact:</h1>

                <form className="add-location-form" onSubmit={handleAddContact}>
                    <label className="form-label">Full name:
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </label>
                    
                    <label className="form-label">Email:
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </label>
                    
                    <label className="form-label">Phone:
                        <input
                            type="number"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                    </label>

                    <div className="form-actions">
                        <button type="submit" className="btn submit-btn" disabled={ !name || !email || !phone }>
                            Add contact
                        </button>
                    </div>
                </form>
            </main>

            <Footer />
        </div>
    );
}
 
export default AddContact;