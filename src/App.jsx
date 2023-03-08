import { useEffect } from "react";
import Home from "./pages/Home";
import styles from "./styles/main.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getWord } from "./fetuares/word/wordSlice";
function App() {
  const dispatch = useDispatch();
  const theme = useSelector(({ theme }) => theme);
  useEffect(() => {
    dispatch(getWord("hello"));
  }, [dispatch]);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className={styles.container}>
      <Home />
    </div>
  );
}

export default App;
