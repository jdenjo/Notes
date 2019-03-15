import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import QuestionShowPage from "./components/QuestionShowPage";

// In JSX, self-closing tags must be closed. <img> doesn't work, you
// must write <img /> instead.

/* <h2>What is your favourite colour?</h2>
<p>
  Red, green, blue, magenta, etc. <br />
  By Bridge Troll
</p>
<p>
  <small>Seen 10 time(s)</small> â <small>Created 10 days ago</small>
</p> */


ReactDOM.render(<QuestionShowPage />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
