import React from "react";
import NoticeBoard from "./NoticeBoard";
import YourDetail from "./YourDetail";

const StudentProfile = () => {
  return (
    <>
      <div className="container-fluid " style={{marginTop:"95px"}}>
        <div className="row">
          <div className="col-12">
            <h6 className="float-end">
              You are Logged in.{" "}
              <a href="#" className="text-danger">
                LogOut
              </a>
            </h6>
          </div>
        </div>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-8">
            <div className="row mt-2">
              <div className="col">
                <span>
                  <b>Student Name:</b> student1
                </span>
                <br />
                <span>
                  <b>Student mail:</b> student1@gmail.com
                </span>
                <br />
                <span>
                  <b>Student Address:</b> block abc , mathura
                </span>
                <span>
                  <a href="#" className="float-end text-decoration-none">
                    Account Settings{" "}
                  </a>
                </span>
              </div>
            </div>
            <YourDetail/>  
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentProfile;
