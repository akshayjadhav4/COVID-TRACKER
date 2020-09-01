import React from "react";
import "./StatusPanal.css";
import InfoBox from "../InfoBox/InfoBox";
import { textPretty } from "../../utils/textPretty";

function StatusPanal({ countryInfo }) {
  return (
    <div className="statusPanal">
      <InfoBox
        title="Active Cases"
        cases={textPretty(countryInfo.cases?.active)}
        newCases={textPretty(countryInfo.cases?.new)}
      />
      <InfoBox
        title="Total Recoverd"
        cases={textPretty(countryInfo.cases?.recovered)}
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
  );
}

export default StatusPanal;
