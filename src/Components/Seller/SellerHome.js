import React from "react";
import { Route, Switch } from "react-router";
import SellerNav from "./SellerNav";
import Home from "./Home";
import SalesArea from "./SalesArea";
import PendingSales from "./PendingSales";
import Invoices from "./Invoices";

function SellerHome() {
  return (
    <div>
      <SellerNav />
      <Switch>
        <Route exact path="/seller" component={Home} />
        <Route path="/seller/home" component={Home} />
        <Route path="/seller/sales-area" component={SalesArea} />
        <Route path="/seller/pending-sales" component={PendingSales} />
        <Route path="/seller/invoices" component={Invoices} />
      </Switch>
    </div>
  );
}

export default SellerHome;
