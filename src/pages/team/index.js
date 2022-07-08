import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import "./style.scss";

const Teampage = () => {
  const team = [
    {
      img: "/assets/imgs/team1.jpg",
      name: "Jhon Doe",
      job: "CEO & Founder",
    },
    {
      img: "/assets/imgs/team2.jpg",
      name: "Anja Doe",
      job: "Art Director",
    },
    {
      img: "/assets/imgs/team3.jpg",
      name: "Mike Ross",
      job: "web Designer",
    },
    {
      img: "/assets/imgs/team4.jpg",
      name: "Dan Star",
      job: "designer",
    },
  ];
  return (
    <div>
      <div className="team">
        <div className="title">
          <h3>THE TEAM</h3>
          <p>The ones who runs this company</p>
        </div>
        <div className="team-data">
          {team.map((item, ind) => {
            return (
              <Card sx={{ maxWidth: 345 }} key={ind}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="240"
                    image={item.img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.job}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className="contact">
                  <Button variant="contained" color="secondary">
                    <MessageRoundedIcon />
                    Contact
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
      </div>
      <div className="add">
        <div>
          <h2>14+</h2>
          <h3>partners</h3>
        </div>
        <div>
          <h2>23+</h2>
          <h3>Project Done</h3>
        </div>
        <div>
          <h2>43+</h2>
          <h3>Happy Clients</h3>
        </div>
        <div>
          <h2>12+</h2>
          <h3>Meetings</h3>
        </div>
      </div>
    </div>
  );
};

export default Teampage;
