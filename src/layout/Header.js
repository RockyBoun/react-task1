import React from "react";
import "./index.scss";
import PersonIcon from "@mui/icons-material/Person";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EmailIcon from "@mui/icons-material/Email";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="pages">
        <div className="logo">
          <NavLink to="/">Logo</NavLink>
        </div>
        <div className="page-title">
          <button>
            <PersonIcon />
            TEAM
          </button>
          <button>
            <MapsHomeWorkIcon />
            WORK
          </button>
          <button>
            <AttachMoneyIcon />
            PRICING
          </button>
          <button>
            <EmailIcon />
            CONTACT
          </button>
          <button>ABOUT</button>
        </div>
      </div>
      <div className="sign">
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
    </div>
  );
};

export default Header;
