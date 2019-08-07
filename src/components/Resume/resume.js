import React from "react";

const Resume = () => {
  return (
    <div className="container " style={{ marginTop: "100px" }}>
      <h1 className="text-center mb-4 text-white">My Resume</h1>
      <div className="row">
        <div className="col-12 col-lg-8 ">
          {/* Education Section Start*/}
          <div className="card mb-4">
            <div className="card-header text-center">
              <h4 className="h4 card-title">Education</h4>
            </div>
            <div className="card-body">
              <div className="media mb-2">
                <i
                  className="fa fa-university fa-fw"
                  style={{ fontSize: "40px" }}
                />
                <div className="media-body">
                  <h2 className="mb-1">MSCS Data Science</h2>
                  <div className="d-sm-flex  justify-content-sm-between align-items-sm-baseline">
                    <h5 className="mb-0">Mohammad Ali Jinnah University</h5>
                    <small>
                      {" "}
                      <time dateTime="09-2019">Sept 2019</time> &ndash;{" "}
                      <time dateTime="Present">Present</time>{" "}
                    </small>
                  </div>
                </div>
              </div>
              <hr />
              <div className="media mb-2">
                <i
                  className="fa fa-university fa-fw"
                  style={{ fontSize: "40px" }}
                />
                <div className="media-body">
                  <h2 className="mb-1">M. Sc Electronics</h2>
                  <div className="d-sm-flex  justify-content-sm-between align-items-sm-baseline">
                    <h5 className="mb-0">University of Karachi</h5>
                    <small>
                      {" "}
                      <time dateTime="09-2019">Jan 2016</time> &ndash;{" "}
                      <time dateTime="Present">Dec 2017</time>{" "}
                    </small>
                  </div>
                </div>
              </div>
              <hr />
              <div className="collapse" id="collapse-work">
                <div className="media mb-2">
                  <i
                    className="fa fa-university fa-fw"
                    style={{ fontSize: "40px" }}
                  />
                  <div className="media-body">
                    <h2 className="mb-1">B. Sc Electronics</h2>
                    <div className="d-sm-flex  justify-content-sm-between align-items-sm-baseline">
                      <h5 className="mb-0">University of Karachi</h5>
                      <small>
                        {" "}
                        <time dateTime="09-2019">Jan 2012</time> &ndash;{" "}
                        <time dateTime="Present">Dec 2016</time>{" "}
                      </small>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="media mb-2">
                  <i
                    className="fa fa-university fa-fw"
                    style={{ fontSize: "40px" }}
                  />
                  <div className="media-body">
                    <h2 className="mb-1">Intermediate</h2>
                    <div className="d-sm-flex  justify-content-sm-between align-items-sm-baseline">
                      <h5 className="mb-0">Govt. National College</h5>
                      <small>
                        {" "}
                        <time dateTime="2009"> 2009</time> &ndash;{" "}
                        <time dateTime="2011">2011</time>{" "}
                      </small>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="media mb-2">
                  <i
                    className="fa fa-university fa-fw"
                    style={{ fontSize: "40px" }}
                  />
                  <div className="media-body">
                    <h2 className="mb-1">Matric</h2>
                    <div className="d-sm-flex  justify-content-sm-between align-items-sm-baseline">
                      <h5 className="mb-0">Nasra School Malir Campus</h5>
                      <small>
                        {" "}
                        <time dateTime="2007">2007</time> &ndash;{" "}
                        <time dateTime="2009">2009</time>{" "}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="btn btn-outline-secondary"
                data-target="#collapse-work"
                data-toggle="collapse"
              >
                Show All
              </button>
            </div>
          </div>
          {/* Education Section End*/}
          {/* Experience Section Start*/}
          <div className="card mb-4">
            <div className="card-header text-center">
              <h4 className="h4 card-title">Experience</h4>
            </div>
            <div className="card-body">
              <div className="media mb-2">
                <i class="fa fa-laptop" style={{ fontSize: "40px" }} />
                <div className="media-body">
                  <h2 className="mb-1">MERN Stack Developer Intern</h2>
                  <div className="d-sm-flex  justify-content-sm-between align-items-sm-baseline">
                    <h5 className="mb-0">Hassan Computing</h5>
                    <small>
                      {" "}
                      <time dateTime="09-2019">June 2019</time> &ndash;{" "}
                      <time dateTime="Present">Present</time>{" "}
                    </small>
                  </div>
                </div>
              </div>
              <hr />
              <div className="media mb-2">
                <i
                  className="fa fa-bar-chart fa-fw"
                  style={{ fontSize: "40px" }}
                />
                <div className="media-body">
                  <h2 className="mb-1">Project Manager</h2>
                  <div className="d-sm-flex  justify-content-sm-between align-items-sm-baseline">
                    <h5 className="mb-0">KNYSYS Development Center</h5>
                    <small>
                      {" "}
                      <time dateTime="09-2019">Sept 2017</time> &ndash;{" "}
                      <time dateTime="Present">Mar 2018</time>{" "}
                    </small>
                  </div>
                </div>
              </div>
              <hr />
              <div className="collapse" id="collapse-experience">
                <div className="media mb-2">
                  <i
                    className="fa fa-book fa-fw"
                    style={{ fontSize: "40px" }}
                  />
                  <div className="media-body">
                    <h2 className="mb-1">Physics Teacher</h2>
                    <div className="d-sm-flex  justify-content-sm-between align-items-sm-baseline">
                      <h5 className="mb-0">Nasra School Malir Campus</h5>
                      <small>
                        {" "}
                        <time dateTime="09-2019">April 2016</time> &ndash;{" "}
                        <time dateTime="Present">Aug 2017</time>{" "}
                      </small>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="media mb-2">
                  <i
                    className="fa fa-pencil fa-fw"
                    style={{ fontSize: "40px" }}
                  />
                  <div className="media-body">
                    <h2 className="mb-1">Administrator</h2>
                    <div className="d-sm-flex  justify-content-sm-between align-items-sm-baseline">
                      <h5 className="mb-0">Leads Group Coaching System</h5>
                      <small>
                        {" "}
                        <time dateTime="2009"> Mar 2018</time> &ndash;{" "}
                        <time dateTime="2011">Present</time>{" "}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="btn btn-outline-secondary"
                data-target="#collapse-experience"
                data-toggle="collapse"
              >
                Show All
              </button>
            </div>
          </div>
          {/* Experience Section End*/}
        </div>

        <div className="col-12 col-lg-4 ">
          {/* Contact Section Start*/}
          <div className="card mb-4">
            <div className="card-header text-center">
              <h4 className="h4 card-title">Contact Info</h4>
            </div>
            <div className="card-body">
              <div className="media ">
                <i
                  class="fa fa-male fa-fw mr-3 "
                  style={{ fontSize: "40px" }}
                />
                <div className="media-body">
                  Zubair Mehboob Chishty <hr />
                </div>
              </div>
              <div className="media ">
                <i
                  class="fa fa-calendar fa-fw mr-3 "
                  style={{ fontSize: "40px" }}
                />
                <div className="media-body">
                  <time dateTime="15-06-1992">15 June 1992</time> <hr />
                </div>
              </div>
              <div className="media ">
                <i
                  class="fa fa-envelope fa-fw mr-3"
                  style={{ fontSize: "40px" }}
                />

                <ul className="media-body list-unstyled">
                  <li>
                    <a href="mailto:alizubair686@gmail.com">
                      alizubair686@gmail.com
                    </a>
                  </li>
                  <li>
                    <i
                      class="fa fa-twitter fa-fw"
                      style={{ fontSize: "20px" }}
                    />
                    <a href="https://twitter.com/alizubair686">Twitter</a>
                  </li>
                  <li>
                    <i
                      class="fa fa-linkedin fa-fw"
                      style={{ fontSize: "20px" }}
                    />
                    <a href="https://linkedin.com/in/zubair-mehboob-947a47118">
                      Linkedin
                    </a>
                  </li>
                  <hr />
                </ul>
              </div>
              <div className="media ">
                <i
                  class="fa fa-phone fa-fw mr-3"
                  style={{ fontSize: "40px" }}
                />

                <ul className="media-body list-unstyled">
                  <li>
                    <a href="tel:+923453254161">+923453254161</a>
                  </li>
                  <li>
                    <i
                      class="fa fa-whatsapp fa-fw"
                      style={{ fontSize: "20px" }}
                    />
                    <a href="tel:+923453254161">Whatsapp</a>
                  </li>
                  <hr />
                </ul>
              </div>
              <div className="media ">
                <i
                  class="fa fa-home fa-fw mr-3 "
                  style={{ fontSize: "40px" }}
                />
                <div className="media-body">
                  <address>
                    H-48 Rafah-e-Aam Society Malir Halt, 75210, Karachi
                  </address>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Section Ends*/}
          <div className="card mb-4">
            <div className="card-header text-center">
              <h4 className="card-title ">Skills</h4>
            </div>
            <div className="card-body">
              <h5 className="mb-3">Front End</h5>
              <div className="media">
                <i
                  class="fa-fw fa fa-html5 mr-3"
                  style={{ fontSize: "40px" }}
                />
                <div className="media-body">
                  <h6 className="text-muted">HTML5</h6>
                  <hr />
                </div>
              </div>
              <div className="media">
                <i class="fa-fw fa fa-css3 mr-3" style={{ fontSize: "40px" }} />
                <div className="media-body">
                  <h6 className="text-muted">CSS3</h6>
                  <hr />
                </div>
              </div>
              <div className="media">
                <i class="fa-fw fa fa-bold mr-3" style={{ fontSize: "40px" }} />
                <div className="media-body">
                  <h6 className="text-muted">Bootstrap 4</h6>
                  <hr />
                </div>
              </div>
              <div className="media">
                <i class="fa-fw fab fa-js mr-3" style={{ fontSize: "40px" }} />
                <div className="media-body">
                  <h6 className="text-muted">JavaScript</h6>
                  <hr />
                </div>
              </div>
              <h5 className="mb-3">Back End</h5>
              <div className="media">
                <i
                  class="fa-fw fab fa-node-js mr-3"
                  style={{ fontSize: "40px" }}
                />
                <div className="media-body">
                  <h6 className="text-muted">NodeJS</h6>
                  <hr />
                </div>
              </div>
              <div className="media">
                <i class="fa-fw fa fa-js mr-3" style={{ fontSize: "40px" }} />
                <div className="media-body">
                  <h6 className="text-muted">ExpressJS</h6>
                  <hr />
                </div>
              </div>
              <div className="media">
                <i
                  class="fa-fw fa fa-database mr-3"
                  style={{ fontSize: "40px" }}
                />
                <div className="media-body">
                  <h6 className="text-muted">MongoDB </h6>
                  <hr />
                </div>
              </div>
              <h5 className="mb-3">Additional Skills</h5>
              <div className="media">
                <i
                  class="fa-fw fa fa-arrow-right mr-3"
                  style={{ fontSize: "40px" }}
                />
                <div className="media-body">
                  <h6 className="text-muted">Project Management</h6>
                  <hr />
                </div>
              </div>
              <div className="media">
                <i
                  class="fa-fw fa fa-github mr-3"
                  style={{ fontSize: "40px" }}
                />
                <div className="media-body">
                  <h6 className="text-muted">Github</h6>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
