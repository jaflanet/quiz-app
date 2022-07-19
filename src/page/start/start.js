import React from "react";
import "./start.css";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="start-containter">
      <div className="start-wrapper">
        <h1 style={{ textAlign: "center" }}>QUIZ</h1>
        <div style={{ fontSize: "16px" }}>
          Rules:
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          accumsan elit vitae nisi faucibus, sit amet interdum arcu vestibulum.
          Duis vel dolor vehicula, consectetur ipsum eu, faucibus magna. Vivamus
          ac risus nibh. In pulvinar at sapien ac aliquet. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Fusce porta scelerisque leo eget faucibus. Morbi tempor metus
          nec semper tristique. Mauris at velit ultricies, porta lacus ac,
          lacinia metus.
        </div>
        <div className="start-button-container">
          {" "}
          <Link to="/quiz" className="start-link">
            <button className="start-button">Start</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
