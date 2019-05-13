import React from "react";

function ImageGrid(props) {
  console.log(props);
  return (
    <div>
      {/* <img
        src={props.data}
        className="rounded mx-auto d-block m-4 row-flex"
        alt="image here"
      /> */}
      <div className="card m-4" style={{ width: "320" }}>
        <img className="card-img-top" src={props.data} alt="Card image cap" />
      </div>
    </div>
  );
}

export default ImageGrid;
