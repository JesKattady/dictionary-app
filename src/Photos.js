import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="row Photos">
        {props.photos.photos.map(function (photo, index) {
          return (
            <div className="col-4" key={index}>
              <img src={photo.src.landscape} alt="img" className="img-fluid" />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
