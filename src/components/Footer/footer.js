import React from "react";
const styles = {
  backgroundColor: "red"
};
const Footer = () => {
  return (
    <div
      className="jumbotron bg-dark d-flex justify-content-center"
      style={{ marginBottom: 0 }}
    >
      <div className="btn-group ">
        <a
          href="https://github.com/zubair-mehboob"
          style={{ textDecoration: "none" }}
        >
          <i className="fa fa-github-square " style={{ fontSize: "40px" }} />
        </a>
        <a
          href="https://www.facebook.com/zubair.zabian"
          style={{ textDecoration: "none" }}
        >
          <i className="fa fa-facebook-square " style={{ fontSize: "40px" }} />
        </a>
        <a
          href="https://linkedin.com/in/zubair-mehboob-947a47118"
          style={{ textDecoration: "none" }}
        >
          <i className="fa fa-linkedin-square " style={{ fontSize: "40px" }} />
        </a>

        <a href="https://twitter.com/alizubair686">
          <i class="fa fa-twitter-square " style={{ fontSize: "40px" }} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
