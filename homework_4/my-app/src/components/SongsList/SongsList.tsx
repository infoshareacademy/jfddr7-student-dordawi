import styles from "./SongsList.module.css";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { Context } from "../../ContextProvider";
import { db } from "./../../firebase-config";
import { useContext, useRef, useState } from "react";

export const SongList = () => {
  const { songs, setSongs, username } = useContext(Context);
  const [currentSong, setCurrentSong] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null);

  const addSong = async (): Promise<void> => {
    try {
      const songId = uuid();
      await setDoc(doc(db, "songs", songId), {
        name: currentSong,
        userEmail: username,
      });

      const updatedSongs = [...songs, currentSong];
      setSongs(updatedSongs);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
      setCurrentSong("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.addProductContainer}>
        <section>
          <input
            ref={inputRef}
            type="text"
            name="Song"
            placeholder="write a song's name"
            onChange={(event) => setCurrentSong(event.target.value)}
          />
          <button className={styles.addSongBtn} type="button" onClick={addSong}>
            Add the song
          </button>
        </section>

        <div className={styles.list}>
          {songs.map((song, index) => (
            <p className={styles.song} key={index}>
              {song}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
