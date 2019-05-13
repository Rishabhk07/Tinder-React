import React from "react";

function InstagramImage(props) {
  return (
    <div>
      <div className="card m-4 ig-img-container" style={{ width: "320" }}>
        <img
          className="card-img-top ig-img"
          src={props.data}
          alt="Card image cap"
        />
      </div>
    </div>
  );
}

export default InstagramImage;
