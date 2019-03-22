import React from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";

let Tables = () => <div>Tables stuff</div>;
let Charts = () => <div>Charts stuff</div>;
let Things = () => <div>Things stuff</div>;

function App() {
  return (
    <Router>
      <div>
        <div id="wrapper">
          <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <TopNav />
            <SideNav />
          </nav>
          <div style={{ backgroundColor: "white" }}>
            {/* PUT YOUR ROUTES HERE */}

            {/* every path in your entire app will go in App.js */}
            <Route exact path="/" component={Dashboard} />
            <Route path="/things" component={Things} />
            <Route path="/charts" component={Charts} />
            <Route path="/tables" component={Tables} />

          </div>
        </div>
      </div>
    </Router>
  );
}


export default App;
