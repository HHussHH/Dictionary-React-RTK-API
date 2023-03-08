import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Switch } from "@material-ui/core";
import { BiBookAlt } from "react-icons/bi";
import { TbMoon } from "react-icons/tb";

import CustomSelector from "../CusttomSelector/CustomSelector";
import { setTheme } from "../../fetuares/theme/themeSlice";

import styles from "../../styles/header.module.scss";
import { getWord } from "../../fetuares/word/wordSlice";

const Header = () => {
  const [active, setActive] = useState(false);

  const dispatch = useDispatch();

  const theme = useSelector(({ theme }) => theme);

  useEffect(() => {
    active ? dispatch(setTheme("dark")) : dispatch(setTheme("light"));
  }, [active]);

  const style = theme === "dark" ? "white" : "gray";

  const handleReset = () => {
    dispatch(getWord("hello"));
  };
  return (
    <div className={styles.header}>
      <BiBookAlt size={40} color={style} onClick={handleReset} />
      <div className={styles.header_group}>
        <CustomSelector />
        <div className={styles.theme}>
          <Switch
            checked={active}
            onChange={() => setActive(!active)}
            color="primary"
            name="checkedB"
            inputProps={{ "aria-label": "primary checkbox" }}
          />

          <TbMoon size={30} color="gray" />
        </div>
      </div>
    </div>
  );
};

export default Header;
