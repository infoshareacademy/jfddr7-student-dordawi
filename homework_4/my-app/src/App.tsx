import { FC, useContext, useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { SignUp } from "./components/SignUp/SignUp";
import { SignIn } from "./components/SignIn/SignIn";
import { Home } from "./components/Home/Home";
import { Context } from "./ContextProvider";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "./firebase-config";
import { query, where, getDocs, collection } from "firebase/firestore";

export const App: FC = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const { setUsername, setSongs, username } = useContext(Context);

  useEffect((): void => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userEmail = user.email;
        setUsername(userEmail || "");
        try {
          const songs: string[] = [];
          const q = query(
            collection(db, "songs"),
            where("userEmail", "==", userEmail)
          );
          const songSnapshot = await getDocs(q);
          songSnapshot.forEach((song) => {
            const { name: songName } = song.data();
            songs.push(songName);
          });
          setSongs(songs);
        } catch (e) {
          console.log(e);
        }
      } else {
        setUsername("");
        setSongs([]);
      }
    });
  }, []);

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
