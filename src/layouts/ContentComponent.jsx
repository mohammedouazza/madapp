import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";

const ContentComponent = () => {
  return (
    <div className="site-layout-background">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default ContentComponent;
