import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import NotificationsPausedIcon from "@mui/icons-material/NotificationsPaused";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./index.scss";
import AboutPage from "./about";
import WorkPage from "./work";
import Teampage from "./team";
import OurWorkPage from "./ourwork";
import PricingPage from "./princing";

const LandingPage = () => {
  return (
    <div className="mac">
      <div className="image">
        <div>
          <p>Start something that maters</p>
          <p>Stop wasting valuable time with projects that just isn't you.</p>
          <button>Learn more start today</button>
          <div className="icons">
            <FacebookIcon />
            <InstagramIcon />
            <NotificationsPausedIcon />
            <PinterestIcon />
            <TwitterIcon />
            <LinkedInIcon />
          </div>
        </div>
      </div>
      <AboutPage />
      <WorkPage />
      <Teampage />
      <OurWorkPage />
      <PricingPage />
    </div>
  );
};

export default LandingPage;
