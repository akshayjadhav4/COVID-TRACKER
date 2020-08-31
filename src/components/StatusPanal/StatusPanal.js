import React from "react";
import "./StatusPanal.css";
import InfoBox from "../InfoBox/InfoBox";

function StatusPanal({ countryInfo }) {
  return (
    <div className="statusPanal">
      <InfoBox
        title="Active Cases"
        cases={countryInfo.cases?.active}
        newCases={countryInfo.cases?.new}
      />
      <InfoBox title="Total Recoverd" cases={countryInfo.cases?.recovered} />
      <InfoBox
        title="Total Deaths"
        cases={countryInfo.deaths?.total}
        newCases={countryInfo.deaths?.new}
      />
      <InfoBox title="Total cases" cases={countryInfo.cases?.total} />
    </div>
  );
}

export default StatusPanal;
