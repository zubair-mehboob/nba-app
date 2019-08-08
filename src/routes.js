import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Projects from "./components/Projects/projects";
import Resume from "./components/Resume/resume";
import Layout from "./components/hoc/Layout";
class Routes extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Route path="/" exact component={Home} />
        <Route path="/my-portfolio/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
      </Layout>
    );
  }
}

export default Routes;
