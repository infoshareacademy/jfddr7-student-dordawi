import React, { FC, useContext, useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { SignUp } from "./components/SignUp/SignUp";
import { SignIn } from "./components/SignIn/SignIn";
import { Home } from "./components/Home/Home";
import { Context } from "./ContextProvider";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// import { Fetch } from "./components/Fetch/Fetch";

export const App: FC = () => {
  const auth = getAuth();
  const { setUsername, setSongs, username } = useContext(Context);

  useEffect((): void => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUsername(user?.email || "");
      } else {
      }
      // setSongs(Fetch)//zapis do stanu globalnego nie działa
    });
  }, []);

  const navigate = useNavigate();
  useEffect(() => {
    if (username) {
      navigate("/home");
    } else {
      navigate("/signin");
    }
  }, [username]);

  return (
    <Routes>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
};

export default App;
