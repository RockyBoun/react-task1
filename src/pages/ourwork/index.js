import React from "react";
import "./style.scss";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import InsertPhoto from "@mui/icons-material/InsertPhoto";

const OurWorkPage = () => {
  const imgs = [
    "/assets/1.jpg",
    "/assets/2.jpg",
    "/assets/3.jpg",
    "/assets/4.jpg",
    "/assets/5.jpg",
    "/assets/6.jpg",
    "/assets/7.jpg",
    "/assets/8.jpg",
  ];
  return (
    <div className="main">
      <div className="ourwork">
        <div className="title">
          <h3>OUR WORK</h3>
          <p>What we've done for people</p>
        </div>
        <div className="product">
          {imgs.map((item, ind) => {
            return <img src={item} alt="img" key={ind} />;
          })}
        </div>
      </div>
      <div className="skills">
        <div className="describe">
          <h3>OUR SKILLS</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
        <div className="progress">
          <div className="progress-item">
            <div>
              <InsertPhotoIcon />
              <p>photography</p>
            </div>
            <div className="progress1">
              <div className="progress-atr1">68%</div>
            </div>
          </div>
          <div className="progress-item">
            <div>
              <DesktopMacIcon />
              <p>Web Design</p>
            </div>
            <div className="progress1">
              <div className="progress-atr2">78%</div>
            </div>
          </div>
          <div className="progress-item">
            <div>
              <InsertPhoto />
              <p>Photo Shop</p>
            </div>
            <div className="progress1">
              <div className="progress-atr3">54%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorkPage;
