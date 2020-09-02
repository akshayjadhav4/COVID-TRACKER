import React from "react";
import "./StatusPanal.css";
import InfoBox from "../InfoBox/InfoBox";
import { textPretty } from "../../utils/textPretty";
import { Typography } from "@material-ui/core";

function StatusPanal({ countryInfo }) {
  return (
    <div className="statusPanal">
      <Typography variant="h5">
        {countryInfo.country === "All" ? "Worldwide" : countryInfo.country}{" "}
        Overview
      </Typography>
      <div className="statusPanal__cards">
        <InfoBox
          title="Active Cases"
          cases={textPretty(countryInfo.cases?.active)}
          newCases={textPretty(countryInfo.cases?.new)}
        />
        <InfoBox
          title="Total Recoverd"
          cases={textPretty(countryInfo.cases?.recovered)}
          isGreen // flag to make text green
        />
        <InfoBox
          title="Total Deaths"
          cases={textPretty(countryInfo.deaths?.total)}
          newCases={textPretty(countryInfo.deaths?.new)}
        />
        <InfoBox
          title="Total cases"
          cases={textPretty(countryInfo.cases?.total)}
        />
      </div>
    </div>
  );
}

export default StatusPanal;
