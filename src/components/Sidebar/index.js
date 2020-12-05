import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export class Sidebar extends Component {
  render() {
    console.log("drawer");
    return (
      <div className="sidebar-main">
          <Link className="nav-button" to="/">Pools</Link>
          <Link className="nav-button" to="/account">Account</Link>
          <Link className="nav-button" to="/vote">Vote</Link>
      </div>
    );
  }
}