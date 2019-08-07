import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Layout from "./components/hoc/Layout";
class Routes extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Layout>
    );
  }
}

export default Routes;
