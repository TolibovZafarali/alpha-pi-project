import { Link } from "react-router-dom";

const StyledLink = ({ children, destination }) => {
    return (
        <Link to={destination}>
            <span className="link">{children}</span>
        </Link>
    );
}
 
export default StyledLink;