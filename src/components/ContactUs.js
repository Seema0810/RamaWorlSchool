import React from "react";
import Title from "./Title";
import "../style.css";

const ContactUs = () => {
  return (
    <>
      <div className="container-fluid bg-light text-secondary" >
        <Title title=" Contact Us" />
        <div className="row justify-content-center">
          <h2 className="ml-5">Rama World School, Sonai</h2>
          <div className="col-4 text-center">
            <span>
              <i className="fa-solid fa-location-dot mr-2"></i>
              Rama World School,
              <br />
              Sonai-281004,
              <br />
              Dist. Mathura,
              <br />
              U.P, India.
            </span>
            <div className="row">
              <div className="col-12 ">
                <h5 className=" mt-3 mb-2 text-center text-info ">Quick Enquiry</h5>
                <form>
                  <div className="row justify-content-center">
                    <div className="col-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center">
                    <div className="col-6">
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Mobile Number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-6">
                  <div class="input-group">
                    <textarea
                      class="form-control"
                      aria-label="With textarea"
                      placeholder="Write message here"
                    ></textarea>
                  </div>
                  </div>
                  </div>

                  <div className="row ml-5 mt-2">
                    <div className="col-6">
                      <button
                        type="submit"
                        className="btn btn-danger btn-sm border-white border-2 rounded-pill mt-1"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-4 ">
            <span>
              <i className="fa-solid fa-school mr-2"></i>0251-2230623,2230624
            </span>
            <br />
            <span>
              <i className="fa-sharp fa-solid fa-square-envelope mr-2"></i>
              ramaworldschool.com
            </span>
            <br />
            <span>
              <i className="fa-sharp fa-solid fa-user-group mr-2"></i>9557578798
            </span>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
