import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "../Footer/footer";

class Layout extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex flex-column bg-dark text-secondary">
        <div>
          <Navbar />
        </div>

        {this.props.children}
        <div className="">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;
