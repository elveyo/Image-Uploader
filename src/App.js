import "./App.css";
import { useState } from "react";
import "./style/Notification.css";
import { auth } from "./firebaseConfig";
import LoginPage from "./pages/LoginPage/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Images from "./pages/ImagesPage/Images";
import AuthContext from "./helper/AuthContext";
console.log("re renderrrrrr");
function App() {
  const [imageList, setImageList] = useState([]);
  return (
    <AuthContext>
      <div className="App">
        <Routes>
          <Route
            path="/images"
            element={
              <Images imageList={imageList} setImageList={setImageList} />
            }
          />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </div>
    </AuthContext>
  );
}

export default App;
