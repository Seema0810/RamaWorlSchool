import React from "react";
import {useState} from 'react';
// import { signupDetails } from "../data";

const Registration = () => {
  const [users, setUsers]=useState(
    {
      name:'',
      email:'',
      password:'',
      confirmPassword:'',
      phone:'',
      address:''
  }
    )

    const handleChange=(e)=>{
      // console.log(e.target.value);
      // console.log(e.target.name);
      setUsers({...users, [e.target.name]:e.target.value});
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(users);
    }
  return (
    <>
      <div className="container" id="myDashboard">
        <div className="row justify-content-center">
          <div className="col-6 ">
            <div className="jumbotron   mt-5 ">
              <h1 className=" rounded border border-3  border-light font-weight-bold pt-1 pb-2 text-center ">
                Registration
              </h1>

              <form onSubmit={handleSubmit}>
                <div className="row mt-3">
                 
                        <div className="col-6" >
                          <div className="form-group">
                            {/* <span className="mr-3">Name:</span> */}
                            <input
                              type="text"
                              className="form-control mt-2"
                              id="name"
                              aria-describedby="emailHelp"
                              name="name"
                              placeholder="Enter your Name"
                              onChange={handleChange}
                              value={users.name}
                            />
                          </div>
                        </div>
                        <div className="col-6" >
                          <div className="form-group">
                            {/* <span className="mr-3">Name:</span> */}
                            <input
                              type="email"
                              className="form-control mt-2"
                              id="email"
                              aria-describedby="emailHelp"
                              name="email"
                              placeholder="Enter Your Email"
                              onChange={handleChange}
                              value={users.email}
                            />
                          </div>
                        </div>
                     
                </div>
                <div className="row mt-3">
                 
                        <div className="col-6" >
                          <div className="form-group">
                            {/* <span className="mr-3">Name:</span> */}
                            <input
                              type="password"
                              className="form-control mt-2"
                              id="password"
                              aria-describedby="emailHelp"
                              name="password"
                              placeholder="Password"
                              onChange={handleChange}
                              value={users.password}
                            />
                          </div>
                        </div>
                        <div className="col-6" >
                          <div className="form-group">
                            {/* <span className="mr-3">Name:</span> */}
                            <input
                              type="password"
                              className="form-control mt-2"
                              id="password"
                              aria-describedby="emailHelp"
                              name="confirmPassword"
                              placeholder="Confirm Password"
                              onChange={handleChange}
                              value={users.confirmPassword}
                            />
                          </div>
                        </div>
                     
                </div>
                <div className="row mt-3">
                 
                        <div className="col-6" >
                          <div className="form-group">
                            {/* <span className="mr-3">Name:</span> */}
                            <input
                              type="Number"
                              className="form-control mt-2"
                              id="phone"
                              aria-describedby="emailHelp"
                              name="phone"
                              placeholder="Contact Number"
                              onChange={handleChange}
                              value={users.phone}
                            />
                          </div>
                        </div>
                        <div className="col-6" >
                          <div className="form-group">
                            {/* <span className="mr-3">Name:</span> */}
                            <input
                              type="address"
                              className="form-control mt-2"
                              id="address"
                              aria-describedby="emailHelp"
                              name="address"
                              placeholder="Your Address"
                              onChange={handleChange}
                              value={users.address}
                            />
                          </div>
                        </div>
                     
                </div>
                
                <div className="row ">
                  <div className="col-6">
                    <button
                      type="submit"
                      className="btn btn-success  border-white border-2 rounded-pill mt-1 btn-lg  "
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
