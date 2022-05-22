import React from "react";
import "../style/UploadContainer.css";
import { useState } from "react";
import { HiUpload } from "react-icons/hi";
import { TiDelete } from "react-icons/ti";

function UploadContainer({ uploadImage, setImage }) {
  const [imagePreview, setImagePreview] = useState("");
  return (
    <>
      <div className="uploadIcon">
        <div className="background"></div>
        <input
          type="file"
          onChange={(event) => {
            setImage(event.target.files[0]);
            setImagePreview(URL.createObjectURL(event.target.files[0]));
          }}
        />
      </div>
      {imagePreview && (
        <div className="uploadContainer">
          <div className="uploadPreview">
            <img src={imagePreview} className="preview"></img>
            <HiUpload
              id="upload"
              onClick={() => {
                uploadImage();
                setImagePreview("");
              }}
            />
            <TiDelete
              id="delete"
              onClick={() => {
                setImagePreview("");
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default UploadContainer;
