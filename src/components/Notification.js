import React from "react";
import { motion } from "framer-motion";

import { MdOutlineDoneOutline, MdOutlineDelete } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const renderNotification = (type) => {
  switch (type) {
    case "uploaded":
      return <MdOutlineDoneOutline className="uploaded" />;
    case "deleted":
      return <MdOutlineDelete className="deleted" />;
    case "inProcess":
      return <AiOutlineLoading3Quarters className="uploading" />;
  }
};
function Notification(props) {
  return (
    <motion.div
      initial={{ bottom: 0 }}
      animate={{ bottom: "45px" }}
      className="notification"
    >
      {renderNotification(props.type)}

      <p>{props.info}</p>
    </motion.div>
  );
}

export default Notification;
