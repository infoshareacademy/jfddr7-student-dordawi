import styles from "./Fetch.module.css";
import { collection, DocumentData, QuerySnapshot } from "firebase/firestore";
import { db } from "./../../firebase-config";
import { useContext, useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { Song } from "./Song";

export interface SongType {
  name?: string;
  userEmail?: string;
}

export const Fetch = () => {
  const songsCollectionRef = collection(db, "songs");
  const [songList, setSongList] = useState<SongType[]>([]);

  useEffect(
    () =>
      onSnapshot(
        songsCollectionRef,
        (snapshot: QuerySnapshot<DocumentData>) => {
          setSongList(
            snapshot.docs.map((doc) => {
              return {
                ...doc.data(),
              };
            })
          );
        }
      ),

    []
  );

  return (
    <div>
      {" "}
      <h2 className={styles.h2}>Songs from the Firebase</h2>{" "}
      {songList.map((song, index) => (
        <p className={styles.song} key={index}>
          <Song key={index} song={song} />
        </p>
      ))}
    </div>
  );
};

//   const querySnapshot = getDocs(collection(db, "Songs"));

//   const fetchAllSongs = () => {
//     querySnapshot.forEach((doc) => {
//       console.log(doc.id, " => ", doc.data());
//     });
//   };

//   return (
//     <div>
//       <h1>Songs from teh Firebase</h1>
//     </div>
//   );
