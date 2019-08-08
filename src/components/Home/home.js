import React from "react";
import { Link } from "react-router-dom";
//import Layout from "../hoc/Layout";
//import About from '../About/about'
import Header from "../Header/header";
import img from "../zubair.jpg";
const Home = () => {
  return (
    <div className="contaner-fluid">
      <Header />

      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <section className="d-flex align-items-center">
            <img
              src={img}
              style={{
                borderRadius: "50%",

                width: "200px",
                height: "200px"
              }}
              className="img-fluid"
            />
            <div className="container text-center">
              <h3> Welcome</h3>
              <p style={{ textAlign: "center" }}>
                Hi, my name is Zubair Mehboob, I'm a student of Mohammad Ali
                Jinnah University, I'm doing MSCS Data Sciences, I'm a
                professional web and mobile app developer.
              </p>

              <Link
                to="/about"
                style={{ textDecoration: "none" }}
                className="btn btn-outline-primary"
              >
                Read More
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
