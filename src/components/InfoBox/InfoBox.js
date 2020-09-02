import React from "react";
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";
function InfoBox({ title, cases, newCases, isGreen }) {
  return (
    <div className="infoBox">
      <Card className="infoBox__card">
        <CardContent>
          <Typography color="textSecondary" className="infoBox__title">
            {title}
          </Typography>
          <h2
            className={`infoBox__cases ${isGreen && " infoBox--casesRecoverd"}`}
          >
            {cases}
          </h2>
          {newCases && (
            <Typography color="textSecondary" className="infoBox__newCases">
              {newCases} new
            </Typography>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoBox;
