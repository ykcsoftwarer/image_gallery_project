import React from "react";

const Picture = (props) => {
  const { photographer, large } = props;

  return (
    <div className="pictures">
      <div className="imageContainer">
        <div className="pictures">
          <div className="picture">
            <img className="picture" src={large} />
           <p className="info" >{photographer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Picture;
