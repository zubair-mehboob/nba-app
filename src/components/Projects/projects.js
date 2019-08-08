import React from "react";
import imgReact from "../react.jpeg";
import imgReads from "../reads2.png";
import imgReads1 from "../reads1.png";
import imgWould from "../would1.png";
import imgWould1 from "../would2.png";
import imgWould2 from "../would8.png";
import imgNode from "../node.png";
import imgNode1 from "../node1.jpg";
import imgNode2 from "../node2.png";
import imgNative from "../react-native.png";
import imgFlash from "../flash1.png";
import imgFlash1 from "../flash2.png";
import imgLeads from "../leads1.png";
import imgLeads1 from "../leads2.png";
import imgLeads2 from "../leads3.png";

const Projects = () => {
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <h1 className="text-center mb-4 text-white">My Projects</h1>
      <div className="row">
        <div className="col- col-md-6 col-lg-4 mb-4">
          <div class="card" style={{ height: "650px" }}>
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                />
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    class="d-block w-100"
                    src={imgWould}
                    alt="First slide"
                    style={{ height: "300px" }}
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src={imgWould1}
                    alt="Second slide"
                    style={{ height: "300px" }}
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src={imgWould2}
                    alt="Third slide"
                    style={{ height: "300px" }}
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true" />
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true" />
                <span class="sr-only">Next</span>
              </a>
            </div>
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
            <div
              id="carouselExampleIndicator"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicator"
                  data-slide-to="0"
                  class="active"
                />
                <li data-target="#carouselExampleIndicator" data-slide-to="1" />
                <li data-target="#carouselExampleIndicator" data-slide-to="2" />
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    class="d-block w-100"
                    src={imgReact}
                    alt="First slide"
                    style={{ height: "300px" }}
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src={imgReads}
                    alt="Second slide"
                    style={{ height: "300px" }}
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src={imgReads1}
                    alt="Third slide"
                    style={{ height: "300px" }}
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicator"
                role="button"
                data-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true" />
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicator"
                role="button"
                data-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true" />
                <span class="sr-only">Next</span>
              </a>
            </div>
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
            <div
              id="carouselExampleIndicatos"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicatos"
                  data-slide-to="0"
                  class="active"
                />
                <li data-target="#carouselExampleIndicatos" data-slide-to="1" />
                <li data-target="#carouselExampleIndicatos" data-slide-to="2" />
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    class="d-block w-100"
                    src={imgNode}
                    alt="First slide"
                    style={{ height: "300px" }}
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src={imgNode1}
                    alt="Second slide"
                    style={{ height: "300px" }}
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src={imgNode2}
                    alt="Third slide"
                    style={{ height: "300px" }}
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicatos"
                role="button"
                data-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true" />
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicatos"
                role="button"
                data-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true" />
                <span class="sr-only">Next</span>
              </a>
            </div>
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
            <div
              id="carouselExampleIndicatrs"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicatrs"
                  data-slide-to="0"
                  class="active"
                />
                <li data-target="#carouselExampleIndicatrs" data-slide-to="1" />
                <li data-target="#carouselExampleIndicatrs" data-slide-to="2" />
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    class="d-block w-100"
                    src={imgNative}
                    alt="First slide"
                    style={{ height: "300px" }}
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src={imgFlash1}
                    alt="Second slide"
                    style={{ height: "300px" }}
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src={imgFlash}
                    alt="Third slide"
                    style={{ height: "300px" }}
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicatrs"
                role="button"
                data-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true" />
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicatrs"
                role="button"
                data-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true" />
                <span class="sr-only">Next</span>
              </a>
            </div>
            <div class="card-body text-center">
              <h5 class="card-title">Flash Card App</h5>
              <p class="card-text">
                This project can work on both iOS and Android platform. I made
                this project by using React Native. In this project user can
                navigate to different screens, user can make their own cards
                each card can contain unlimited number of quizes. user can
                participate in quizes as well.
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
            <div
              id="carouselExampleIndicaors"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicaors"
                  data-slide-to="0"
                  class="active"
                />
                <li data-target="#carouselExampleIndicaors" data-slide-to="1" />
                <li data-target="#carouselExampleIndicaors" data-slide-to="2" />
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    class="d-block w-100"
                    src={imgLeads}
                    alt="First slide"
                    style={{ height: "300px" }}
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src={imgLeads1}
                    alt="Second slide"
                    style={{ height: "300px" }}
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src={imgLeads2}
                    alt="Third slide"
                    style={{ height: "300px" }}
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicaors"
                role="button"
                data-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true" />
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicaors"
                role="button"
                data-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true" />
                <span class="sr-only">Next</span>
              </a>
            </div>
            <div class="card-body text-center">
              <h5 class="card-title">Leads Group Coaching System Website</h5>
              <p class="card-text">
                This is a static single page website, in this project I use
                Bootstrap 4. This is a responsive website which can work well on
                all devices.
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
