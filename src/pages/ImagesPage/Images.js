import React, { useEffect, useState } from "react";
import Title from "./components/Title";
import Galery from "./components/Galery";
import UploadContainer from "./components/UploadContainer";
import ImageContext from "../../helper/ImageContext";
import Animation from "./components/Animation";
import { useAuth } from "../../helper/AuthContext";
import { useNavigate } from "react-router-dom";

function Images({ imageList, setImageList }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      setLoading(false);
    }
  }, []);
  return (
    <>
      {!loading && (
        <div className="container">
          <Animation />
          <Title />
          <ImageContext>
            <UploadContainer setImageList={setImageList} />
            <Galery imageList={imageList} setImageList={setImageList} />
          </ImageContext>
        </div>
      )}
    </>
  );
}

export default Images;
