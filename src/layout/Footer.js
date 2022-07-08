import { Button } from "@mui/material";
import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import NotificationsPausedIcon from "@mui/icons-material/NotificationsPaused";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="footer">
      <Button color="inherit" variant="contained">
        <ArrowUpwardIcon />
        To the top
      </Button>
      <div className="icons">
        <FacebookIcon />
        <InstagramIcon />
        <NotificationsPausedIcon />
        <PinterestIcon />
        <TwitterIcon />
        <LinkedInIcon />
      </div>
      <div>
        <p>
          powered by
          <a href="https://www.w3schools.com/w3css/default.asp"> w3 school</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
