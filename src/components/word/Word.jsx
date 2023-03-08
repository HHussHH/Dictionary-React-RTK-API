import React from "react";
import styles from "../../styles/word.module.scss";
import { BsFillPlayFill } from "react-icons/bs";
import { useSelector } from "react-redux";
const Word = () => {
  const { word, trans, error } = useSelector(({ word }) => word);

  return (
    <div className={styles.word}>
      <div className={styles.inner}>
        <h1>{error ? "sorry we don`t know this word" : word}</h1>
        <div className={styles.playIcon}>
          <BsFillPlayFill color="#A647ED" />
        </div>
      </div>
      <h3 className={styles.desc}>{trans}</h3>
    </div>
  );
};

export default Word;
