import React, { createContext, useReducer } from "react";

export const AppContext = createContext();
const initialState = {
  isUploading: false,
  isUploaded: false,
  isDeleting: false,
  isDeleted: false,
};
function ImageContext(props) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "uploading":
        return { ...state, isUploading: true };
      case "uploaded":
        return { ...state, isUploading: false, isUploaded: true };
      case "deleting":
        return { ...state, isDeleting: true, isDeleted: false };
      case "deleted":
        return { ...state, isDeleting: false, isDeleted: true };
      default:
        console.log(initialState);
        return initialState;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default ImageContext;
