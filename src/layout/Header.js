import React from "react";
import "./index.scss";
import PersonIcon from "@mui/icons-material/Person";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EmailIcon from "@mui/icons-material/Email";
const Header = () => {
  return (
    <div className="header">
      <div className="pages">
        <li className="logo">
          <a href="/">Logo</a>
        </li>
        <ul>
          <li>
            <a href="/team">
              <PersonIcon />
              TEAM
            </a>
          </li>
          <li>
            <a href="/work">
              <MapsHomeWorkIcon />
              WORK
            </a>
          </li>
          <li>
            <a href="/pricing">
              <AttachMoneyIcon />
              PRICING
            </a>
          </li>
          <li>
            <a href="/contact">
              <EmailIcon />
              CONTACT
            </a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
        </ul>
      </div>
      <div className="sign">
        <a href="/login">Log In</a>
        <a href="/signup">Sign Up</a>
      </div>
    </div>
  );
};

export default Header;
