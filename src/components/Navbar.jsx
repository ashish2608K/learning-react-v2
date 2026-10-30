import { useState } from "react";
import "../css/navbar.css";
import LogoIcon from "../images/icons/trek.png";

const leftLinks = ["Home", "Treks", "Destinations"];
const rightLinks = ["Blog", "About", "Search"];

function Navbar() {
    const [active, setActive] = useState("Home");

    const renderLink = (label) => (
        <a
            key={label}
            href="#"
            className={`navbar_link ${active === label ? "active" : ""}`}
            onClick={(e) => {
                e.preventDefault();
                setActive(label);
            }}
        >
            {label}
        </a>
    );

    return (
        <nav className="navbar">
            <div className="navbar_group navbar_left">
                {leftLinks.map(renderLink)}
            </div>

            <a href="#" className="navbar_logo">
                <img src={LogoIcon} alt="Himalayan Trails" />
                <span>Himalayan Trails</span>
            </a>

            <div className="navbar_group navbar_right">
                {rightLinks.map(renderLink)}
            </div>
        </nav>
    );
}

export default Navbar;