import React from "react";
import "./DisplaySeasons.css";
const seasonsConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: "sun",
  },
  winter: {
    text: "Burr, It is chilly",
    iconName: "snowflake",
  },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const DisplaySeasons = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonsConfig[season];
  return (
    <div className="season">
      <i className={`massive ${iconName} icon icon-1`} />
      <h1>{text}</h1>
      <i className={`massive ${iconName} icon icon-2`} />
    </div>
  );
};

export default DisplaySeasons;
