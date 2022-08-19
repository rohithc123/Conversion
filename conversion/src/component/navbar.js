import React from "react";
import styles from "../styles/navbar.css";
import { NavLink } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="container">
        <NavLink to="/distance">
          <div className="tab">Distance</div>
        </NavLink>
        <NavLink to="/Weights">
          <div className="tab">Weights</div>
        </NavLink>
        <NavLink to="/time">
          <div className="tab">Time</div>
        </NavLink>
      </div>
    );
  }
}
