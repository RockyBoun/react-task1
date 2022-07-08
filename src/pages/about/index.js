import React from "react";
import "./style.scss";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DiamondIcon from "@mui/icons-material/Diamond";
import SettingsIcon from "@mui/icons-material/Settings";
const AboutPage = () => {
  const companies = [
    {
      icon: <DesktopMacIcon fontSize="large" />,
      title: "Responsive",
      describe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
    {
      icon: <FavoriteIcon fontSize="large" />,
      title: "Passion",
      describe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
    {
      icon: <DiamondIcon fontSize="large" />,
      title: "Design",
      describe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
    {
      icon: <SettingsIcon fontSize="large" />,
      title: "Support",
      describe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
  ];
  return (
    <div className="about">
      <h3>ABOUT THE COMPANY</h3>
      <p>KEY features of our company</p>
      <div className="company">
        {companies.map((company, ind) => {
          return (
            <div key={ind} className="item">
              {company.icon}
              <p className="title">{company.title}</p>
              <p className="describe">{company.describe}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutPage;
