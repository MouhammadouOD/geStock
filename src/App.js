import { Route, Switch } from "react-router-dom";
import "./App.css";
import AdminHome from "./Components/Admin/AdminHome";
import Login from "./Components/Login/Login";
import ManagerHome from "./Components/Manager/ManagerHome";
import SellerHome from "./Components/Seller/SellerHome";
//import { Route, Switch } from "react-router-dom";

function App() {
  return (
  
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/admin" component={AdminHome} />
        <Route path="/manager" component={ManagerHome} />
        <Route path="/seller" component={SellerHome} />
      </Switch>
  
  );
}

export default App;
