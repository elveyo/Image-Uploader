import React from "react";
import { TiDelete } from "react-icons/ti";

function Images({ showImage, deleteImage, imageList }) {
  return (
    <div className="galery">
      {imageList.map((url) => (
        <div className="image">
          <img src={url} onClick={() => showImage(url)}></img>
          <TiDelete onClick={() => deleteImage(url)} />
        </div>
      ))}
    </div>
  );
}

export default Images;
