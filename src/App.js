import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import UploadContainer from "./components/UploadContainer";
import Galery from "./components/Galery";
import Animation from "./components/Animation";
import Notification from "./components/Notification";
import "./style/Notification.css";
import ImageState from "./helper/ImageState";

function App() {
  const [imageList, setImageList] = useState([]);
  //move uploadImage and deleteImage func in other file to clean App.js
  //make useReducer hook for notification
  return (
    <div className="App">
      <Animation />
      <Title />
      <ImageState>
        <UploadContainer setImageList={setImageList} />
        <Galery imageList={imageList} setImageList={setImageList} />
      </ImageState>
    </div>
  );
}

export default App;
