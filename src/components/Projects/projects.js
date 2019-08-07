import React from "react";
import imgReact from "../react.jpeg";
import imgNode from "../node.png";
import imgNative from "../react-native.png";
import imgb from "../b.jpg";

const Projects = () => {
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <h1 className="text-center mb-4 text-white">My Projects</h1>
      <div className="row">
        <div className="col- col-md-6 col-lg-4 mb-4">
          <div class="card">
            <img
              class="card-img-top"
              src={imgReact}
              alt="Card image cap"
              style={{ height: "300px" }}
            />
            <div class="card-body text-center">
              <h5 class="card-title">Would you Rather App</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="https://github.com/zubair-mehboob/Would-You-Rather-App"
                class="btn btn-outline-primary"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
        <div className="col- col-md-6 col-lg-4 mb-4">
          <div class="card">
            <img
              class="card-img-top"
              src={imgReact}
              alt="Card image cap"
              style={{ height: "300px" }}
            />
            <div class="card-body text-center">
              <h5 class="card-title">My Reads App</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="https://github.com/zubair-mehboob/myReads"
                class="btn btn-outline-primary"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
        <div className="col- col-md-6 col-lg-4 mb-4">
          <div class="card">
            <img
              class="card-img-top"
              src={imgNode}
              alt="Card image cap"
              style={{ height: "300px" }}
            />
            <div class="card-body text-center">
              <h5 class="card-title">Vidly API</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="https://github.com/zubair-mehboob/vidly-restfull-api"
                class="btn btn-outline-primary"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
        <div className="col- col-md-6 col-lg-4 mb-4">
          <div class="card">
            <img
              class="card-img-top"
              src={imgNative}
              alt="Card image cap"
              style={{ height: "300px" }}
            />
            <div class="card-body text-center">
              <h5 class="card-title">Flash Card App</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="https://github.com/zubair-mehboob/Flash-Card-App"
                class="btn btn-outline-primary"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
        <div className="col- col-md-6 col-lg-4 mb-4">
          <div class="card">
            <img
              class="card-img-top"
              src={imgb}
              alt="Card image cap"
              style={{ height: "300px" }}
            />
            <div class="card-body text-center">
              <h5 class="card-title">Leads Group Coaching System Website</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="https://github.com/zubair-mehboob/LeadsGroupCoaching"
                class="btn btn-outline-primary"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
