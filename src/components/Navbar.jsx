
import "../css/index.css";
import LogoIcon from "../../himalayas_treks_db/public/images/icons/trek.png";
import { NavLink, Link } from "react-router-dom";

const leftLinks = [
    { label: "Home", path: "/" },
    { label: "Treks", path: "/treks" },
];

const rightLinks = [
    { label: "About", path: "/about" },
    { label: "Login", path: "/loginx" },
];

function Navbar() {

    const renderLink = ({ label, path }) => (
        <NavLink
            key={label}
            to={path}
            end={path === "/"}
            className={({ isActive }) =>
                `navbar_link ${isActive ? "active" : ""}`
            }
        >
            {label}
        </NavLink>
    );

    return (
        <nav className="site_navbar">

            <div className="navbar_group navbar_left">
                {leftLinks.map(renderLink)}
            </div>

            <Link to="/" className="navbar_logo">
                <img src={LogoIcon} alt="Himalayan Trails" />
                <span>Himalayan Trails</span>
            </Link>

            <div className="navbar_group navbar_right">
                {rightLinks.map(renderLink)}
            </div>

        </nav>
    );
}

export default Navbar;
