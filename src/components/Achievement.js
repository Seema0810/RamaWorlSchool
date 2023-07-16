import React from 'react';
import { achievements } from '../data';
import achievement from "../images/achievement.jpg"
const Achievement = () => {
  return (
    <>
    <div className='col-lg-3 col-xs-1 offset-1 card opacity-75 text-bg-info shadow-lg text-dark' >
        <h3><b>Achievements</b>
        <img src ={achievement} alt="achievement" className='img-achievement rounded-circle ml-2 mt-1'/>
        </h3>
        <ul className="list-group list-group-flush list-unstyled">
            {achievements.map((achievement)=>{
                return(
                    <li className="list-group-item text-bg-info text-dark shadow-lg">
                    <marquee direction="up" scrollamount="1" key={achievement.id}>{achievement.text}</marquee>
                    </li>
                )
            })}
            </ul>
    </div>
    </>
  )
}

export default Achievement