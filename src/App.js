import "./App.css";
import { useState, useEffect } from "react";
import { v4 } from "uuid";
import { storage } from "./firebaseConfig";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import Title from "./components/Title";
import UploadContainer from "./components/UploadContainer";
import Galery from "./components/Galery";
import Animation from "./components/Animation";
import Notification from "./components/Notification";
import "./style/Notification.css";

function App() {
  const [image, setImage] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const listImageRef = ref(storage, "images/");

  //function for uploading image
  const uploadImage = () => {
    if (image == null) return;
    setIsUploading(true);
    const imageRef = ref(storage, `images/${image.name + v4()}`);
    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
      });
      setIsUploading(false);
      setIsUploaded(true);
      setTimeout(() => setIsUploaded(false), 3000);
    });
  };

  //function for deleting image in storage
  const deleteImage = (url) => {
    setIsDeleting(true);
    const deleteRef = ref(storage, url);
    deleteObject(deleteRef).then(() => {
      setImageList(imageList.filter((imgUrl) => imgUrl != url));
      setIsDeleted(true);
      setIsDeleting(false);
      setTimeout(() => setIsDeleted(false), 3000);
    });
  };

  return (
    <div className="App">
      <Animation />
      <Title />
      <UploadContainer setImage={setImage} uploadImage={uploadImage} />
      {isUploading && (
        <Notification info="Uploading 1 image.." type="uploading" />
      )}
      {isDeleting && (
        <Notification info="Deleting 1 image.." type="uploading" />
      )}
      {isUploaded && <Notification info="1 image uploaded" type="uploaded" />}
      {isDeleted && <Notification info="1 image deleted" type="deleted" />}
      <Galery
        imageList={imageList}
        deleteImage={deleteImage}
        setImageList={setImageList}
        listImageRef={listImageRef}
      />
    </div>
  );
}

export default App;
