import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { getItem } from "./utils/localStorage";
import { useNavigate } from "react-router-dom";
import BlackStyledLink from "./BlackStyledLink";
import "./Login.css"

const Login = () => {
    
    const navigate = useNavigate();
    
    const [ userName, setUserName ] = useState("");
    const [ password, setPassword ] = useState(""); 
    const [ invalidLogin, setInvalidLogin ] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const users = getItem("users") || [];

        const exists = users.find((user) => (
            user.userName === userName && user.password === password
        ));

        if (exists) {
            navigate(`/dashboard/${userName}`);
        } else {
            setInvalidLogin(true);
        }
    }

    return (
        <div className="wrapper">
            <Header />

            <main className="sign-in-page-main">
                <div>
                    <h1>Let's get you signed in!</h1>
                    
                    <div className="login-content">
                        <form onSubmit={handleSubmit}>
                            <label className="form-label"> Username:
                                <input
                                    type="text"
                                    value={userName}
                                    required
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </label>
                            
                            <label className="form-label"> Password:
                                <input
                                    type="password"
                                    value={password}
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </label>

                            <div>
                                {invalidLogin && <p className="error">Invalid username or password.</p>}
                            </div>

                            <input type="submit" value="Sign In" className="button-27"></input>
                        </form>

                        <hr />

                        <p>Don't have an account? Sign up <BlackStyledLink destination={"/application"}>here</BlackStyledLink></p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
 
export default Login;