import { useState } from "react";
import styles from "../../styles/input.module.scss";
import { ImSearch } from "react-icons/im";
import { useDispatch } from "react-redux";
import { getWord } from "../../fetuares/word/wordSlice";
const Input = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getWord(value));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        placeholder="type any word"
        type="text"
        value={value}
        onChange={handleChange}
      />
      <ImSearch color="#AA85CF" onClick={handleSubmit} />
    </form>
  );
};

export default Input;
