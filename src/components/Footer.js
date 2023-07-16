import React from 'react';
import {socialLinks} from '../data';

const Footer = () => {
  return (
    <>
    <footer className=" footer-background">
      
      <ul className=" d-flex justify-content-center list-unstyled ">
        {socialLinks.map((link)=>{
          const {id, href, icon}=link;
          return( 
          <li key={id}>
            <a href={href} target="_blank" rel="noreferrer" className="footer-icon mx-3 mt-3"
              ><i className={icon} id='style-icon'  ></i></a>
          </li>
          )
        })}
       
      
      </ul>
      <p className="d-flex justify-content-center text-capitalize font-italic copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span>all rights reserved
      </p>
    </footer>

    </>
  )
}

export default Footer