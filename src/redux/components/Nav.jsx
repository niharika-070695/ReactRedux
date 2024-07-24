import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
function nav() {
  return (
    <div className="nav">
      <div className="leftPanel flexContainer">
        <h2>React Redux</h2>
      </div>
      <div class="rightPanel flexContainer">
        <Link to="/redux" style={{ fontSize: 15 }}>
          Redux
        </Link>
      </div>
    </div>
  );
}

export default nav;
