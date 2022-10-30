import React from "react";

const Picture = (props) => {
  const { photographer, large } = props;

  return (
    <div className="App pictures imageContainer">
      <div className="morePicture">
        <div className="card picture">
          <img className="img picture" src={large} />
          <p className="info">{photographer}</p>
        </div>
      </div>
    </div>
  );
};

export default Picture;
