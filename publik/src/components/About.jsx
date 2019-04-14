import React from "react";
// import { Link } from "react-router-dom";

class About extends React.Component {
  render() {
    return (
      <div className="home-page">
        <h2>About page</h2>
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vR53fA4ImxVHLqhKqi0Vr1vOdxdcGrlmYr4KAmY20155za-iOkOF_zkppJRuHjf59LXpqDQwlY5kCSq/embed?start=true&loop=false&delayms=5000"
            frameborder="0"
            width="960"
            height="569"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          />
      </div>
    );
  }
}
export default About;
