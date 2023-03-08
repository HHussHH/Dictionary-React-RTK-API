import React, { useRef, useState } from "react";
import styles from "../../styles/word.module.scss";
import { BsFillPlayFill } from "react-icons/bs";
import { useSelector } from "react-redux";
const Word = () => {
  const { word, trans, error, audio } = useSelector(({ word }) => word);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioElem = useRef();

  const PlayPause = () => {
    audioElem.current.play();
  };

  return (
    <div className={styles.word}>
      <audio src={audio} ref={audioElem} />
      <div className={styles.inner}>
        <h1>{error ? "sorry we don`t know this word" : word}</h1>
        {audio ? (
          <button className={styles.playIcon} onClick={PlayPause}>
            <BsFillPlayFill color="#A647ED" />
          </button>
        ) : null}
      </div>
      <h3 className={styles.desc}>{trans}</h3>
    </div>
  );
};

export default Word;
