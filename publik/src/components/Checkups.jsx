import React from "react";
// import { Link } from "react-router-dom";
import { checkupsURL } from "../endpoints";
import CheckupCard from "./CheckupCard.jsx";

class Checkup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkups: [
        {
          id: 1,
          date: "Monday, August 14, 1993",
          diagnosis: "Uterine Fibroids (7.9cm). Severe",
          treatment:
            "High-Intensity Focused Ultrasound (HIFU) Non-evasive surgery, Esmya"
        },
        {
          id: 2,
          date: "Tuesday, October 22, 2018",
          diagnosis: "Lung Cancer",
          treatment: "Kemotherapy"
        }
      ]
    };
  }

  componentDidMount() {
    fetch(checkupsURL)
      .then(resp => resp.json())
      .then(checkups => this.setState({ checkups: checkups }));
  }

  render() {
    let checkups = this.state.checkups.map(checkup => (
      <CheckupCard key={checkup.id} checkup={checkup} />
    ));
    console.log("this.state", this.state);
    console.log("this.props", this.props);
    return (
      <div className="home-page">
        <h2>Checkup page</h2>
        {checkups}
      </div>
    );
  }
}
export default Checkup;
