import styles from "./Fetch.module.css";
import { SongType } from "./Fetch";

interface SongProps {
  song: SongType;
}

export const Song = ({ song }: SongProps) => {
  return <div className={styles.song}>{song.name}</div>;
};
