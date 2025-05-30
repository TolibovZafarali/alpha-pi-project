import { Link } from "react-router-dom";

const BlackStyledLink = ({ children, destination }) => {
    return (
        <Link to={destination}>
            <span className="blackLink">{children}</span>
        </Link>
    );
}
 
export default BlackStyledLink;