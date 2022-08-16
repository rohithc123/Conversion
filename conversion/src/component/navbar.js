import React from "react";
import styles from "../styles/navbar.css";
import { NavLink } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="container">
        <NavLink to="/kmtom">
          <div className="tab">Currency</div>
        </NavLink>
        <NavLink to="/mtokm">
          <div className="tab">Temperature</div>
        </NavLink>
        <NavLink to="/distance">
          <div className="tab">Distance</div>
        </NavLink>
      </div>
    );
  }
}
