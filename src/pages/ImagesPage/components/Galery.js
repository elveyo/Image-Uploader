import React, { useState, useEffect, useContext } from "react";
import "../../../style/Galery.css";
import { getDownloadURL, listAll, ref, deleteObject } from "firebase/storage";
import { motion } from "framer-motion";
import { storage } from "../../../firebaseConfig";
import Loading from "./Loading";
import ImageStatus from "./ImageStatus";
import Images from "./Images";
import { AppContext } from "../../../helper/ImageContext";
import { useAuth } from "../../../helper/AuthContext";

function Galery({ imageList, setImageList }) {
  const [isImageOpened, setIsImageOpened] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { dispatch } = useContext(AppContext);
  const { user } = useAuth();
  const listImageRef = ref(storage, `/${user.email}`);

  const showImage = (url) => {
    setImageUrl(url);
    setIsImageOpened(true);
  };

  //function for deleting image in storage
  const deleteImage = (url) => {
    dispatch({ type: "deleting" });
    const deleteRef = ref(storage, url);
    deleteObject(deleteRef).then(() => {
      setImageList(imageList.filter((imgUrl) => imgUrl != url));
      dispatch({ type: "deleted" });
      setTimeout(() => dispatch({ type: "" }), 1000);
    });
  };
  //fething data from firebase storage
  useEffect(() => {
    listAll(listImageRef).then((response) => {
      response.items.forEach((img) => {
        getDownloadURL(img).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
      setTimeout(() => setIsLoading(false), 1000);
    });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <>
      {imageList.length === 0 ? (
        <h1 className="no-images">No images !</h1>
      ) : (
        <>
          <Images
            deleteImage={deleteImage}
            showImage={showImage}
            imageList={imageList}
          />
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
      )}

      <ImageStatus />
    </>
  );
}

export default Galery;
