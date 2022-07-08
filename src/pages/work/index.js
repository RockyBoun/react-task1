import { Grid } from "@mui/material";
import React from "react";
import "./style.scss";

const WorkPage = () => {
  return (
    <Grid container className="work">
      <Grid item xs={6}>
        <h3>We know design</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
        <button>View our work</button>
      </Grid>
      <Grid item xs={6}>
        <img src="/assets/imgs/3.jpg" alt="img"></img>
      </Grid>
    </Grid>
  );
};

export default WorkPage;
