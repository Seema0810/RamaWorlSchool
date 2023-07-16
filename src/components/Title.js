import React from 'react';

const Title = (props) => {
  return (
    <div className="Row" style={{marginTop:"90px"}}>
    <div className="col-xs-1">
      <h1 className="d-flex justify-content-center pt-2 pb-3">
       {props.title}
      </h1>
    </div>
  </div>
  )
}

export default Title