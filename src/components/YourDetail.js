import React from "react";
import "../style.css";
import { studentDetails } from "../data";

const YourDetail = () => {
  return (
    <>
      <div className="col-xs-4 col-lg-5 mx-4">
        <h5 className="float-left">Your details</h5>
        <hr />
        <ul className="list-group list-group-flush list-unstyled">
          {studentDetails.map((studentDetail) => {
            const {
              id,
              image,
              name,
              enrollmentNo,
              admissionNo,
              session,
              Class,
              section,
              rollNo,
              fatherName,
              yourAttendance,
            } = studentDetail;
            return (
              <>
              <li key={id} className="list-group-item list-group-item-warning">
                <img
                  src={image}
                  alt=""
                  className="img-fluid img-thumbnail img_style"
                />                
              </li>
              <li className="list-group-item list-group-item-warning"><b>Student Name:</b> {name}</li>
              <li className="list-group-item list-group-item-warning"><b>Enrollment No.:</b> {enrollmentNo}</li>
              <li className="list-group-item list-group-item-warning"><b>Admission No.:</b> {admissionNo}</li>
              <li className="list-group-item list-group-item-warning"><b>Session:</b> {session}</li>
              <li className="list-group-item list-group-item-warning"><b>Class:</b> {Class}</li>
              <li className="list-group-item list-group-item-warning"><b>Section:</b> {section}</li>
              <li className="list-group-item list-group-item-warning"><b>Roll No.:</b> {rollNo}</li>
              <li className="list-group-item list-group-item-warning"><b>Father Name:</b> {fatherName}</li>
              <li className="list-group-item list-group-item-warning"><b>Your Attendance:</b> {yourAttendance}</li>

              </>
              
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default YourDetail;
