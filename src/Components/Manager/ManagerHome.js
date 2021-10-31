import React from "react";
import ManagerNav from "./ManagerNav";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Store from "./Store";
import Factures from "./Factures";
import Stocks from "./Stocks";

function ManagerHome() {
  return (
    <div>
      <ManagerNav />
      <Switch>
        <Route exact path="/manager" component={Home} />
        <Route path="/manager/home" component={Home} />
        <Route path="/manager/store" component={Store} />
        <Route path="/manager/factures" component={Factures} />
        <Route path="/manager/stocks" component={Stocks} />
      </Switch>
    </div>
  );
}

export default ManagerHome;
