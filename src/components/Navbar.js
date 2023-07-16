import React from "react";
import { pageLinks } from "../data";
import { useState } from "react";
import Login from "./Login";

import "../style.css";

const Navbar = () => {
  const [showLogin, setShowLogin]= useState(false);
  const toggleHandle=()=>{
    if(showLogin){
      setShowLogin(false);
      return
    }
   setShowLogin(true);

  }
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg nav_style">
        <a className="navbar-brand" href="#">
          <div style={{ height: "60px" }}>
            <img
              src="https://penji.co/wp-content/uploads/2019/02/Campion-College-School-Logo-Design-1024x791.jpg"
              width="60px"
              height="60px"
              className="rounded-circle mx-3"
            />
            <div className="logo">
              Rama
              <div className="school_name">World School</div>
            </div>
          </div>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto ">
            {pageLinks.map((link) => {
              return (
                <li className="nav-item active home_style text-capitalize  " key={link.id}>
                  <a
                    className="nav-link mx-4 anchor_style"
                    style={{ color: "honeydew" }}
                    href={link.href} onClick={toggleHandle}
                  >
                    {link.text}
                  </a>
                </li>
              );
            })}
             
          </ul>
         
        </div>
        
      </nav>
      {showLogin && <Login/>}
      
    </>
  );
};
export default Navbar;
