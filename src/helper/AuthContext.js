import React, { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";

const UserContext = createContext();
export const useAuth = () => useContext(UserContext);
function AuthContext({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("on auth called");
      setLoading(false);
      if (!user) {
        return navigate("/");
      }
      setUser(user);
      navigate("/images");
    });
  }, []);
  return (
    <UserContext.Provider value={{ user }}>
      {!loading && children}
    </UserContext.Provider>
  );
}

export default AuthContext;
