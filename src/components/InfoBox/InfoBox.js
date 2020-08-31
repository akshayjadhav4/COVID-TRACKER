import React from "react";
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";
function InfoBox({ title, cases }) {
  return (
    <div className="infoBox">
      <Card>
        <CardContent>
          <Typography color="textSecondary" className="infoBox__title">
            {title}
          </Typography>
          <h2 className="infoBox__cases">{cases}</h2>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoBox;
