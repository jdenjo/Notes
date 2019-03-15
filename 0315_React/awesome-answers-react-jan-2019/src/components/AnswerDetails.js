// const React = require("react")
import React from "react";
// The "import" is the native JavaScript way to import modules.
// Here, we use to import our "react" package.
import "../styles/AnswerDetails.css";

// This function is a React Component
// It is a function that returns a React Element
function AnswerDetails(props) {
  return (
    // Returns a React Element
    <div className="AnswerDetails">
      <p>
        {props.body}
        <br />
        By {props.author.full_name}
      </p>
      <p>Answered at {props.created_at.toLocaleString()}</p>
    </div>
  );
}

// module.exports = AnswerDetails
// To be able to import code from this file into another file, we use
// the "export" keyword instead of "module.exports"
export default AnswerDetails;
