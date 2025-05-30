import { NavLink } from "react-router-dom";
import StyledLink from "./StyledLink";

const Header = () => {
    return (
        <header>
                <StyledLink destination={"/"}>
                    <img src="/black-logo.svg" alt="alpha-pi logo"></img>
                </StyledLink>
                <div className="separator"></div>
                <h1>Alpha-Pi</h1>

                <div className="topnav">
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/news">News</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div>
        </header>
    );
}
 
export default Header;