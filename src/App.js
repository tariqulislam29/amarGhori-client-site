import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom"
import './App.css';
import Dashboard from "./Components/Dashboard/Dashboard";
import Explore from "./Components/Explore/Explore";
import Home from './Components/Home/Home';
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import PurchaseOrder from "./Components/PurchaseOrder/PurchaseOrder";
import Register from "./Components/Register/Register";
import AuthProvider from "./context/AuthProvider";


function App() {
  return (
    <div >
      <AuthProvider>
        <Router>

          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/explore'>
              <Explore></Explore>
            </Route>
            <Route path='/dashboard'>
              <Dashboard></Dashboard>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path='/purchaseOrder/:id'>
              <PurchaseOrder></PurchaseOrder>
            </PrivateRoute>
          </Switch>

        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
