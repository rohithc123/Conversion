import React from "react";
import styles from "../styles/navbar.css";
import { NavLink } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="container">
        <NavLink to="/kmtom">
          <div className="tab">Kilometre to metre</div>
        </NavLink>
        <NavLink to="/mtokm">
          <div className="tab">Meter to Kilometre</div>
        </NavLink>
      </div>
    );
  }
}
