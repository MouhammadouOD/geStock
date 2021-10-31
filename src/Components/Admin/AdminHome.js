import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminNav from "./AdminNav";
import Users from "./Users";
import Home from "./Home";
import "./Admin.css";

function AdminHome() {
  return (
    <div>
      <AdminNav />
      <Switch>
        <Route exact path="/admin" component={Home} />
        <Route path="/admin/home" component={Home} />
        <Route path="/admin/users" component={Users} />
      </Switch>
    </div>
  );
}

export default AdminHome;
