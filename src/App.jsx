import { useEffect } from "react";
import Home from "./pages/Home";
import styles from "./styles/main.module.scss";
import { useDispatch } from "react-redux";
import { getWord } from "./fetuares/word/wordSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWord("Example"));
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <Home />
    </div>
  );
}

export default App;
