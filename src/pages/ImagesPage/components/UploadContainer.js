import React, { useContext } from "react";
import "../../../style/UploadContainer.css";
import { useState } from "react";
import { HiUpload } from "react-icons/hi";
import { TiDelete } from "react-icons/ti";
import { storage } from "../../../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { AppContext } from "../../../helper/ImageContext";
import { useAuth } from "../../../helper/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";

function UploadContainer({ setImageList }) {
  const [imagePreview, setImagePreview] = useState("");
  const [image, setImage] = useState(null);
  const { dispatch, isUploaded } = useContext(AppContext);
  const { user, setUser } = useAuth();
  const signOutUser = async () => {
    setImageList([]);
    await signOut(auth);
  };
  //function for uploading image
  const uploadImage = () => {
    if (image == null) return;
    dispatch({ type: "uploading" });
    const imageRef = ref(storage, `${user.email}/${image.name + v4()}`);
    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
      });
      dispatch({ type: "uploaded" });
      setTimeout(() => dispatch(""), 1000);
    });
  };

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
      <button
        className="sign-out"
        onClick={() => {
          signOutUser();
        }}
      >
        Sign out
      </button>
    </>
  );
}

export default UploadContainer;
