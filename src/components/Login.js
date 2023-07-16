import React from "react";
// import Title from "./Title";
import { useState } from "react";
import Registration from "./Registration";
// import { loginDetails, checkboxes } from "../data";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [student, setStudent]= useState(false);

  const [showSign, setShowSign] = useState(false);
  const toggleSignUp = () => {
    if (showSign) {
      setShowSign(false);
      return;
    }
    setShowSign(true);
  };
  const handleOnchange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert('form submitted');
    console.log(user);
  };
  const handleChecked=(e)=>{
    console.log(e.target.checked)
    setStudent(e.target.checked);
  }
  return (
    <div>
      {/* <Title title='My Dashboard' /> */}
      <div className="row mt-5 ">
        <div className="col-6"></div>
        <div className="col-5">
          <div className="jumbotron mt-5 float-end ">
            <h2>
              Login <img src="../images/login-image.jpg" />
            </h2>
            <form className="form-inline d-flex" onSubmit={handleSubmit}>
              <div className="form-group ">
                {/* {loginDetails.map((loginDetail)=>{
              const {id, type, placeholder} =loginDetail; */}

                <input
                  id="email"
                  type="email"
                  className="form-control mr-3"
                  name="email"
                  value={user.email}
                  aria-describedby="emailHelp"
                  placeholder="Enter your email"
                  onChange={handleOnchange}
                />

                {/* )} */}
              </div>
              <div className="form-group ">
                {/* {loginDetails.map((loginDetail)=>{
              const {id, type, placeholder} =loginDetail; */}

                <input
                  id="password"
                  type="password"
                  className="form-control mr-3"
                  name="password"
                  value={user.password}
                  aria-describedby="emailHelp"
                  placeholder="Password"
                  onChange={handleOnchange}
                />

                {/* )} */}
              </div>
              <br />
              <button
                type="submit"
                className="btn btn-warning btn-sm border-white border-2 rounded-pill mt-3 mr-5"
              >
                Login
              </button>
              <button
                type="submit"
                className="btn btn-success btn-sm border-white border-2 rounded-pill mt-3 "
                onClick={toggleSignUp}
              >
                SignUp
                <span className="pt-3 ml-2 text-info fs-6 fst-italic">
                  Not a user ??
                </span>
              </button>
            </form>

            <div className="form-check form-check-inline">
              <input
                id="student"
                className="form-check-input mt-3"
                type="checkbox"
                name="student"
                onChange={handleChecked}
                checked={student}
              />
              <label
                className="form-check-label mt-2 pt-1"
                htmlFor="inlineCheckbox1"
              >
                <i>Student</i>
              </label>
              </div>
              {/* <div className="form-check form-check-inline">
              <input
                id="parent"
                className="form-check-input mt-3"
                type="checkbox"
                name="parent"
                onChange={handleChecked}
                checked={parent}
              />
              <label
                className="form-check-label mt-2 pt-1"
                htmlFor="inlineCheckbox1"
              >
                <i>Parent</i>
              </label>
              </div>
              <div className="form-check form-check-inline">
              <input
                id="student"
                className="form-check-input mt-3"
                type="checkbox"
                name="Teacher"
                onChange={handleChecked}
                checked={teacher}
              />
              <label
                className="form-check-label mt-2 pt-1"
                htmlFor="inlineCheckbox1"
              >
                <i>Teacher</i>
              </label>
              </div> */}
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      {showSign && <Registration />}
    </div>
    //
  );
};

export default Login;
