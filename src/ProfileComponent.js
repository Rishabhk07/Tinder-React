import React from "react";
import ImageComponent from "./ImageGridComponent";
import InstagramImage from "./InstagramImageComponent";

function Profile(props) {
  const thisProfile = props.profiles.find(
    eachProfile => props.match.params.userId === eachProfile.user.name
  );
  console.log(thisProfile);
  const ImageGrid = thisProfile.user.photos.map(photoItem => (
    <ImageComponent
      className="col-flex"
      key={photoItem.id}
      data={photoItem.processedFiles[1].url}
    />
  ));
  const InstagramGrid = thisProfile.instagram
    ? thisProfile.instagram.photos.map(photoItem => (
        <InstagramImage
          className="col-flex"
          key={photoItem.ts}
          data={photoItem.image}
        />
      ))
    : null;

  return (
    <div className="container">
      <div className="row m-3">
        <div className="col-4">
          <img
            src={thisProfile.user.photos[0].url}
            alt="Imagine me"
            className="img-thumbnail ig-img"
          />
        </div>
        <div className="col-8">
          <h2>{thisProfile.user.name}</h2>
          <p>{thisProfile.user.bio}</p>
        </div>
      </div>
      <hr />
      <div className="row">{ImageGrid}</div>
      {thisProfile.instagram && (
        <div>
          <h4>Instagram</h4>
          <div className="row">{InstagramGrid}</div>
        </div>
      )}
    </div>
  );
}

export default Profile;
