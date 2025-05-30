import { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { setItem, getItem } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";
import PasswordValidator from "../utils/PasswordValidator";
import BlackStyledLink from "../BlackStyledLink";
import "../Login.css"

const Application = () => {
    
    const navigate = useNavigate()

    const [ userName, setUserName ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ userNameExists, setUserNameExists ] = useState(false);
    const [ passwordMatch, setPasswordMatch ] = useState(true);
    const [ passwordValid, setPasswordValid ] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        const users = getItem("users") || [];

        if (users.some((user) => user.userName === userName)) {
            setUserNameExists(true);
            setPasswordMatch(true);
            setPasswordValid(true);
            return;
        } else if (password !== confirmPassword) {
            setUserNameExists(false);
            setPasswordMatch(false);
            setPasswordValid(true);
            return;
        } else if (!PasswordValidator(password)) {
            setUserNameExists(false);
            setPasswordMatch(true);
            setPasswordValid(false);
            return;
        }

        users.push({ userName, password });
        setItem("users", users);

        navigate(`/dashboard/${userName}`)
    }  

    return (
        <div className="wrapper">
            <Header />

            <main className="sign-in-page-main">
                <div>
                    <h1>Let's get you signed up!</h1>

                    <div className="login-content">
                        <form onSubmit={handleSubmit}>
                            <label className="form-label">Username:
                                <input
                                    type="text"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    required
                                />
                            </label>

                            <label className="form-label">Password:
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </label>

                            <label className="form-label">Confirm password:
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </label>

                            <div>
                                {userNameExists && <p className="error">Username already exists!</p>}
                                {!passwordMatch && <p className="error">Passwords don't match.</p>}
                                {!passwordValid && (
                                    <p className="error">
                                        Your password must:
                                        <br/>1. Be at least 8 characters long.
                                        <br/>2. Contain at least one letter.
                                        <br/>3. Contain at least one number.
                                    </p>
                                )}
                            </div>

                            <input type="submit" value="Sign Up" className="button-27"></input>
                        </form>

                        <hr/>
                        <p>Already have an account? Sign in <BlackStyledLink destination={"/login"}>here</BlackStyledLink></p>
                    </div>


                </div>
            </main>

            <Footer />
        </div>
    );
}
 
export default Application;
