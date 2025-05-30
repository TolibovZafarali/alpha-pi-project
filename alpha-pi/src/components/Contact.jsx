import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import "./Contact.css"

const Contact = () => {
    
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phone, setPhone ] = useState("")
    const [ message, setMessage ] = useState("");
    
    return (
        <div className="wrapper">
            <Header />

            <main className="contact-us-main">
                <div className="contact-us">
                    <h1>Contact Us</h1>
                    
                    <form>
                        <label>
                            Full Name:
                            <input
                                type="text"
                                value={name}
                                required
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="email"
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <label>
                            Phone:
                            <input
                                type="number"
                                value={phone}
                                required={false}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Optional"
                            />
                        </label>
                        <label>
                            Message:
                            <textarea
                                type="text"
                                value={message}
                                required
                                onChange={(e) => setMessage(e.target.value)}
                                maxLength={200}
                            />
                        </label>

                        <p>{200-message.length}/200</p>

                        <Link to="/contact/successful">
                            <button
                                disabled={!name || !email || !message}>
                                    Send
                            </button>
                        </Link>
                    </form>

                    <div className="preview-contact">
                        <h2>Preview</h2>

                        <p>Full name: {name || ("Not provided")}</p>
                        <p>Email: {email || ("Not provided")}</p>
                        <p>Phone: {phone || ("Optional")}</p>
                        <p>Message: {message || ("Not provided")}</p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
 
export default Contact;