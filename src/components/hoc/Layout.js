import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "../Footer/footer";

class Layout extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex flex-column ">
        <div>
          <Navbar />
        </div>

        {this.props.children}
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;
