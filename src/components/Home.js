import React from "react";
import "../style.css";
import school_img1 from "../images/school_img1.jpg";
import school_img2 from "../images/school_img2.jpg";
import school_img3 from "../images/school_img3.jpg";
import school_img4 from "../images/school_img4.jpg";
import MissionVIsion from "./MissionVIsion";
import NoticeBoard from "./NoticeBoard";


const Home = () => {
  return (
    <>
      <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel" >
        <ol className="carousel-indicators">
          <li 
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
            
          ></li>
          <li  data-target="#myCarousel" data-slide-to="1"   ></li>
          <li  data-target="#myCarousel" data-slide-to="2"  ></li>
          <li  data-target="#myCarousel" data-slide-to="3" ></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={school_img1} className=" d-block w-100" alt=""/>
          </div>
          <div className="carousel-item ">
            {/* <div className="container-fluid ml-0 mr-0 mt-1"> */}
              <img src={school_img2} className=" d-block w-100" alt='' />
            {/* </div> */}
          </div>
          <div className="carousel-item ">
            {/* <div className="container-fluid ml-0 mr-0 mt-2"> */}
              <img src={school_img3} className=" d-block w-100" alt='' />
            {/* </div> */}
          </div>
          <div className="carousel-item ">
            {/* <div className="container-fluid ml-0 mr-0 mt-1"> */}
              <img src={school_img4} className=" d-block w-100" alt=''/>
            {/* </div> */}
          </div>
        </div>
        <a className="carousel-control-prev" role="button" href="#myCarousel" data-slide="prev">
        <span className="carousel-control-prev-icon" area-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" role="button" href="#myCarousel" data-slide="next">
          <span className="carousel-control-next-icon" area-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <MissionVIsion/>
      <NoticeBoard/>
    </>
  );
};

export default Home;
