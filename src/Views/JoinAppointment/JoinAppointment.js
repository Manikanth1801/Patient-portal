import React from "react";
import "./JoinAppointment.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import "antd/dist/antd.css";
// import "font-awesome/css/font-awesome.min.css";
// import Footer from "./components/Footer/Footer";
const JoinAppointment = () => {
  return (
    // <Router>
    //   <Switch>
    //     <Route path="/" component={Home} />
    //   </Switch>
    //   <Footer />
    // </Router>
    <Home/>
  );
};

export default JoinAppointment;
