import { FC, useContext } from "react";
import { Context } from "../../ContextProvider";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import { signOut } from "firebase/auth";
import { auth } from "./../../firebase-config";
import { SongList } from "../SongsList/SongsList";

export const Home: FC = () => {
  const navigate = useNavigate();
  const { username, setUsername } = useContext(Context);
  const onLogout = (): void => {
    setUsername("");
    signOut(auth);
    navigate("/signup");
  };

  return (
    <div className={styles.container}>
      <p className={styles.header}>Witaj w naszej aplikacji {username}</p>
      <SongList />
      <button className={styles.logoutBtn} type="button" onClick={onLogout}>
        Wyloguj
      </button>
    </div>
  );
};
