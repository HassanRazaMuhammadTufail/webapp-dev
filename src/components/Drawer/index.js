import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";

class DrawerComponent extends Component {
  render() {
    console.log("drawer");
    return (
      <div className="drawer-main">
          <Link className="nav-button" to="/">Pools</Link>
          <Link className="nav-button" to="/account">Account</Link>
          <Link className="nav-button" to="/vote">Vote</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // filteredTodos: getVisibleTodos(state)
  
})

const mapDispatchToProps = dispatch => ({
  // actions: bindActionCreators(TodoActions, dispatch)
})

export const Drawer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerComponent);