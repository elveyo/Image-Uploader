import React, { useState, useEffect } from "react";
import "../style/Galery.css";
import { TiDelete } from "react-icons/ti";
import { getDownloadURL, listAll } from "firebase/storage";
import Loading from "./Loading";
import { motion } from "framer-motion";

function Galery({ imageList, deleteImage, setImageList, listImageRef }) {
  const [isImageOpened, setIsImageOpened] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const showImage = (url) => {
    setImageUrl(url);
    setIsImageOpened(true);
  };

  //fething data from firebase storage
  useEffect(() => {
    listAll(listImageRef).then((response) => {
      response.items.forEach((img) => {
        getDownloadURL(img).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
      setTimeout(() => setIsLoading(false), 2000);
    });
  }, []);

  if (imageList.length > 0) {
    return (
      <>
        <div className="galery">
          {imageList.map((url) => (
            <div className="image">
              <img src={url} onClick={() => showImage(url)}></img>
              <TiDelete onClick={() => deleteImage(url)} />
            </div>
          ))}
        </div>
        {isImageOpened && (
          <div className="full-image" onClick={() => setIsImageOpened(false)}>
            <motion.img
              initial={{ y: "-60vh" }}
              animate={{ y: 0 }}
              src={imageUrl}
            ></motion.img>
          </div>
        )}
      </>
    );
  }
  if (isLoading) return <Loading />;

  if (imageList.length == 0) {
    return <h1 className="no-images">No images !</h1>;
  }
}

export default Galery;
