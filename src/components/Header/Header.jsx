import { BiBookAlt } from "react-icons/bi";
import { TbMoon } from "react-icons/tb";
import CustomSelector from "../CusttomSelector/CustomSelector";
import styles from "../../styles/header.module.scss";
import { Switch } from "@material-ui/core";

const Header = () => {
  return (
    <div className={styles.header}>
      <BiBookAlt size={40} color="gray" />
      <div className={styles.header_group}>
        <CustomSelector />
        <div className={styles.theme}>
          <Switch
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
