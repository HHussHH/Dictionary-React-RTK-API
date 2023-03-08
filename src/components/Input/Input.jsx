import { useState } from "react";
import styles from "../../styles/input.module.scss";
import { ImSearch } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { getWord } from "../../fetuares/word/wordSlice";
const Input = () => {
  const dispatch = useDispatch();

  const theme = useSelector(({ theme }) => theme);

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getWord(value));
    setValue("");
  };

  const style = theme === "dark" ? styles.form_dark : styles.form;

  return (
    <form className={style} onSubmit={handleSubmit}>
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
