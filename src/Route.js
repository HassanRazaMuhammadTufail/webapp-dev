import React, { Component } from "react";
import { Navbar } from "./components/Navbar";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Pools } from "./screens/Pools";
import { Vote } from "./screens/Vote";
import { UserAccount } from "./screens/Account";
import { Sidebar } from "./components/Sidebar";
import { Drawer } from "./components/Drawer";
import './App.css';
import { connect } from "react-redux";

class AppRoutesComponent extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Sidebar />
          {/* <Drawer /> */}
          <Switch>
            <Route exact path="/" component={Pools} />
            <Route path="/vote" component={Vote} />
            <Route path="/account" component={UserAccount} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
})

const AppRoutes = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRoutesComponent)

export default AppRoutes;
