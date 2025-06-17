import React from "react";
import { Link } from "react-router-dom";
import Subscribe from "../Subscribe/Subscribe";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="about">
        <Link to="/">penned</Link>
        <span>
          Hub for insights, tutorials, and the latest innovations in the tech
          universe.
        </span>
        <span>&copy;2025 penned</span>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="terms">
        <Subscribe />
      </div>
    </div>
  );
};

export default Footer;
