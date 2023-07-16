import React from "react";
import history_img1 from "../images/history_img1.jpg";
import "../style.css";
import Title from "./Title";

const About = () => {
  return (
    <>
      <div className="container-fluid bg-light text-secondary">
      <Title title=" About Us || History" />

        <div className="Row d-flex">
          <div className="col-2 mr-4">
            <img
              src={history_img1}
              className=" img-thumbnail rounded-circle history_img"
            />
          </div>
          <div className="col-10 mt-2">
            In the year 1952,Late Shri Basant Kumar Birla, the 31 year old
            younger son of Shri Ghanshyam Das Birla, laid the foundation for his
            first independent venture, Century Rayon at Shahad, along Murbad
            Road on the banks of Ulhas River.The Birla family has always
            operated beyond business through numerous community initiatives in
            education, health, philanthropy and humanitarianism.To steer these
            activities around Century Rayon, the Kalyan Charitable Trust (KCT)
            was formed in 1956, under the stewardship of Late Dr Sarala Birla.
          </div>
        </div>
        <div className="Row d-flex">
          <div className="col-10 mr-0 mt-3">
            In the year 1952,Late Shri Basant Kumar Birla, the 31 year old
            younger son of Shri Ghanshyam Das Birla, laid the foundation for his
            first independent venture, Century Rayon at Shahad, along Murbad
            Road on the banks of Ulhas River.The Birla family has always
            operated beyond business through numerous community initiatives in
            education, health, philanthropy and humanitarianism.To steer these
            activities around Century Rayon, the Kalyan Charitable Trust (KCT)
            was formed in 1956, under the stewardship of Late Dr Sarala Birla.
          </div>
          <div className="col-2">
            <img
              src={history_img1}
              className=" img-thumbnail rounded-circle history_img"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2 className="text-uppercase font-weight-bold text-secondary">
              Vision & Mission:
            </h2>
            <h3 className="text-info">Quality Policy & Mission</h3>
            <p>
              We at B.K. Birla Public School, Kalyan strive to provide our
              students the best opportunities for enhancing their innate and
              acquired potentials in a safe and inclusive environment,
              instilling in them a belief in life-long learning and thereby
              motivating them to be responsible global citizens and productive
              participants in the sustainable development.
            </p>
            <h3 className="text-info">Core Values:</h3>
            B - Belief in life-long learning & holistic approach
            <br />
            I - Improving continually for excellence through innovation.
            <br />
            R - Respect & recognition of work force for their valuable
            contribution.
            <br />
            L - Leaders leading the team with goals for sustainability. <br />A
            - Ambience for better learning and adaptability.
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
