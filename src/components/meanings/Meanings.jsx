import React from "react";
import styles from "../../styles/meanings.module.scss";
import { useSelector } from "react-redux";

const Meanings = () => {
  const info = useSelector(({ word }) => word);

  const { meanings } = info;

  const word = meanings.map(({ partOfSpeech, definitions, synonyms }) => (
    <div key={partOfSpeech}>
      <div className={styles.header}>
        <div className={styles.title}>{partOfSpeech}</div>
        <div className={styles.line} />
      </div>
      <h2 className={styles.suptitle}>Meaning</h2>
      <ul className={styles.meanings}>
        {definitions.map((item, id) => (
          <li className={styles.custom_link} key={id}>
            {item.definition}
          </li>
        ))}
      </ul>
      <div className={styles.synonyms}>
        Synonyms: <p>{synonyms.map((item) => item + ",  ")}</p>
      </div>
    </div>
  ));
  return <>{word}</>;
};

export default Meanings;
