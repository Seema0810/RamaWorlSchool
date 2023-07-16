import React from "react";
import schoolImg from "../images/schoolimg.jpg";

import "../style.css";
import {MissionVision} from "../data"
import { useState } from "react";

const MissionVIsion = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <div className="container-fluid mission_vision mt-0 ">
        <img
          src={schoolImg}
          alt="RAMA WORLD SCHOOL, Sonai"
          className="img-fluid w-100 background-img shadow-lg "
          style={{ height: "250px" }}
        />
        <div className="text-sm-center text-md-center school_text mt-2">
          <span className="marqueue">Welcome to Rama World School,Sonai</span>
        </div>
        <div className="mission_vision d-flex w-100">
          {MissionVision.map((missionVision)=>{
            return(
              <div className="col-6 mission-text" key={missionVision.id}>
              <img src={missionVision.image} alt="" className="ml-2 shadow-lg mission" />
              <span className="ml-1 opacity-75 text">{missionVision.text}</span>
              <p className=" ml-2 para-font">{readMore?missionVision.info:`${missionVision.info.substring(0,50)}...`}</p>
              <button className="btn button-style mt-4 ml-1 " onClick={()=>setReadMore(!readMore)}>{readMore?'Show Less':'Read More'}</button>
            </div>

            )
          })}
         
          
          
        </div>
        
        
        
      </div>
    </>
  );
};

export default MissionVIsion;
