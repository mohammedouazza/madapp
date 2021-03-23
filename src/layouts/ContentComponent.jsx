import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import BinaryConversion from "../components/home/BinaryConversion";

const ContentComponent = () => {
  return (
    <div
      className="site-layout-background"
      style={{ padding: 30, textAlign: "center" }}
    >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/binary-conversion" component={BinaryConversion} />
      </Switch>
    </div>
  );
};

export default ContentComponent;
