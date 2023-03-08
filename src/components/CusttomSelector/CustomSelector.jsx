import { MenuItem, Select } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styles from "../../styles/header.module.scss";
import { useSelector } from "react-redux";

const CustomSelector = () => {
  const [font, setFont] = useState("serif");
  const theme = useSelector(({ theme }) => theme);
  const handleChange = (event) => {
    setFont(event.target.value);
  };

  useEffect(() => {
    document.body.setAttribute("data-ff", font);
  }, [font]);

  return (
    <Select
      style={{ color: theme === "dark" ? "white" : null }}
      value={font}
      onChange={handleChange}
      disableUnderline
      className={styles.select}
    >
      <MenuItem value="serif">Serif</MenuItem>
      <MenuItem value="roboto">Roboto</MenuItem>
    </Select>
  );
};

export default CustomSelector;
