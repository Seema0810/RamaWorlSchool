import React from "react";
import YourDetail from "./YourDetail";
import notice from "../images/notice.jpg";
import { notices } from "../data";
import Achievement from "./Achievement";

import ChairmanDesk from "./ChairmanDesk";

const NoticeBoard = () => {
  return (
    <>
      <div className="container-fluid cont">
        <div className="row">
          <div className="col-xs-1 offset-1 col-lg-3">
            <div className="card opacity-75  ">
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-bg-info text-dark shadow-lg ">
                  <h4>
                    <b>Notices</b>
                    <span>
                      <img
                        src={notice}
                        className="notice-img rounded-circle ml-2"
                      />
                    </span>
                  </h4>
                </li>
                {notices.map((notice) => {
                  return (
                    <li
                      className="list-group-item text-bg-info text-dark shadow-lg transition "
                      key={notice.id}
                    >
                      <marquee direction="up" scrollamount="1">
                        {" "}
                        {notice.text}{" "}
                      </marquee>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          
            <Achievement />
         
            <ChairmanDesk />
        </div>
        
      </div>
    </>
  );
};

export default NoticeBoard;
