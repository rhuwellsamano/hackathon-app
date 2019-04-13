import React from "react";
// import { Link } from "react-router-dom";

const CheckupCard = props => {
  const { date, diagnosis, treatment } = props.checkup;
  return (
    <div className="checkup-card">
      <h3>Date: {date}</h3>
      <h3>Diagnosis: {diagnosis}</h3>
      <h3>Treatment: {treatment}</h3>
      <br />
    </div>
  );
};

export default CheckupCard;
