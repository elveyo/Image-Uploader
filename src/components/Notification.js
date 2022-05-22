import React from "react";
import { motion } from "framer-motion";

import { MdOutlineDoneOutline, MdOutlineDelete } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Notification(props) {
  return (
    <motion.div
      initial={{ bottom: 0 }}
      animate={{ bottom: "45px" }}
      className="notification"
    >
      {props.type === "uploaded" && (
        <MdOutlineDoneOutline className="uploaded" />
      )}
      {props.type === "deleted" && <MdOutlineDelete className="deleted" />}
      {props.type === "uploading" && (
        <AiOutlineLoading3Quarters className="uploading" />
      )}

      <p>{props.info}</p>
    </motion.div>
  );
}

export default Notification;
