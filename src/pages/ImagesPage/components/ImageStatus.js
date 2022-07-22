import React, { useContext } from "react";
import { AppContext } from "../../../helper/ImageContext";
import Notification from "./Notification";

function ImageStatus() {
  const { isDeleting, isDeleted, isUploading, isUploaded } =
    useContext(AppContext);
  return (
    <div>
      {isUploading && (
        <Notification type="inProcess" info="Uploading 1 image" />
      )}
      {isUploaded && <Notification type="uploaded" info="1 image uploaded" />}
      {isDeleting && (
        <Notification type="inProcess" info="Deleting 1 image..." />
      )}
      {isDeleted && <Notification type="deleted" info="1 image removed" />}
    </div>
  );
}

export default ImageStatus;
