import React, { Component } from "react";
export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-uppercase text-center mb-5" style={{ marginTop: "80px" }}>
          This is Rays Home page by react JS
        </h1>
        <div className="container-fluid" >
          <div className="row">
            <div className="col">
              <img src={require("../image/rayswoman.jpg")} alt="..." style={{ width: "100%" }} />
            </div>
          </div>
          <div>
            <h1 style={{ color: "rgba(127,17,70,1)", fontFamily: "Lato, sansSerif", marginBottom: "50px" }}><em>Rays Technologies</em></h1>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 font-4">
              <img style={{ width: '100%', height: '400px' }} src={require("../image/main.jpg")} alt="..." />
            </div>
            <div className="col-md-6">
              <p>
                Rays Technologies is premium Corporate Training and Placement
                company. It is providing training on cutting-edge technologies
                like AI, Machine Learning, Spring, Angular, React, Java, Python,
                Automated Testing, etc. After IIT and NIT, Rays is one of the
                leading institute in India from where IT Engineers are getting
                highest packages in multinational companies.
              </p>
              <p>
                Rays Technologies is an ISO 9001:2015 certified Company. It was
                established in 2006 and is active in multiple cities in India.
                We started our company with ‘SUNRAYS’ brand name that was later
                renamed RAYS Technologies in 2015. We primarily deal in
                Information Technology Services, Staffing Solutions, Corporate
                Training, and Career Consultancy. We aim at providing highly
                trained cutting-edge IT professionals to the IT Industry.
              </p>
              <p>
                We provide training to Corporate Employees and Professionals in
                end-to-end enterprise solutions. Our training contents are
                designed and developed in accordance with the current industry
                standards and future requirements. Our courses are highly valued
                in the corporate IT world. Our courses cover the most
                comprehensive portfolio of IT.{" "}
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 style={{ color: "rgba(127,17,70,1)", fontFamily: "Lato, sansSerif" }}><em>Our Recruiters</em></h1>
        </div>
        <h6 style={{ color: "blue", textAlign: "center" }}>...<i>ooo</i>...</h6>
      </div>
    );
  }
}
