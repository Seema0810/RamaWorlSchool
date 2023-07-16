import React from "react";
import chairman from "../images/Chairman-ABG.jpg";
import { useState } from "react";

const ChairmanDesk = () => {
  const [readMore, setReadMore] = useState(false);
  const [data, setData] = useState(
    "Our Group strongly believes in touching lives of our employees and the society at large beyond our business. The area of education is one such touch point. In today’s meritocratic and competitive world, empowering lives is what we need to attempt to do through our education system. I believe our institutions of excellence embodied in our Group schools symbolize our commitment to build the future of India. We strive through our committed teachers and our innovative teaching methodology to develop every student as a holistic human being. I hope our schools offer an excellent option to the parents to build their children’s future."
  );
  return (
    <>
      <div className="col-3 offset-1 bg-primary rounded ">
        <h5 className="text-light mt-1">Message from Chairman's Desk</h5>
        <img
          src={chairman}
          alt="chairman"
          className="border border-light  img-chairman"
        />
        {readMore ? (
          <p className="text-light mt-1">{data}</p>
        ) : (
          <p className="text-light mt-1">{`${data.substring(0, 201)}...`}</p>
        )}
        <button
          className="btn btn-sm btn-light mb-2 ml-2"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "Show Less" : "Read more"}
        </button>
      </div>
    </>
  );
};

export default ChairmanDesk;
