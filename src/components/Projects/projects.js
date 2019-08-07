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
          <div class="card" style={{ height: "650px" }}>
            <img
              class="card-img-top"
              src={imgReact}
              alt="Card image cap"
              style={{ height: "300px" }}
            />
            <div class="card-body text-center">
              <h5 class="card-title">Would you Rather App</h5>
              <p class="card-text">
                I made this project using React, Redux and reactstrap. In this
                app you can switch between three users. Each user can make
                quize, participate in quize and can see their quize result.
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
          <div class="card" style={{ height: "650px" }}>
            <img
              class="card-img-top"
              src={imgReact}
              alt="Card image cap"
              style={{ height: "300px" }}
            />
            <div class="card-body text-center">
              <h5 class="card-title">My Reads App</h5>
              <p class="card-text">
                In this project there are mainly three book shelf i.e Read, Want
                to Read and Currently Reading, user can change the book shelf by
                using a drop down menu on a book cover. There is a search
                component in which user can search books and also they can
                directly add books from search component in any shelf. I made
                this project by using react, html and css.
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
          <div class="card" style={{ height: "650px" }}>
            <img
              class="card-img-top"
              src={imgNode}
              alt="Card image cap"
              style={{ height: "300px" }}
            />
            <div class="card-body text-center">
              <h5 class="card-title">Vidly API</h5>
              <p class="card-text">
                I am currently working on this project, this is a movie app. So
                far I have made four end points in this project in which user
                can perform CRUD operation by using ExpressJS and Mongoose.
                These four end points are: users, movies, rentals and genre.
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
          <div class="card" style={{ height: "650px" }}>
            <img
              class="card-img-top"
              src={imgNative}
              alt="Card image cap"
              style={{ height: "300px" }}
            />
            <div class="card-body text-center">
              <h5 class="card-title">Flash Card App</h5>
              <p class="card-text">
                In this project I have learnt how to make apps on both iOS and
                Android platform by using React Native. In this project I learn
                how to navigate to different screens, how to use stack navigator
                and tab navigator. In addition to that I learnt how to use
                Asyncstorage of a phone.
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
          <div class="card" style={{ height: "650px" }}>
            <img
              class="card-img-top"
              src={imgb}
              alt="Card image cap"
              style={{ height: "300px" }}
            />
            <div class="card-body text-center">
              <h5 class="card-title">Leads Group Coaching System Website</h5>
              <p class="card-text">
                This is static single page website, in this project I learnt
                various things about Bootstrap 4 like carousel, cards,
                jumbotrons etc.
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
