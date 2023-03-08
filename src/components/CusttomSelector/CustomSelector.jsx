import { MenuItem, Select } from "@material-ui/core";
import React, { useState } from "react";

const CustomSelector = () => {
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Select value={age} displayEmpty onChange={handleChange} disableUnderline>
      <MenuItem value="">Serif</MenuItem>
      <MenuItem value="1">Шрифт 1</MenuItem>
      <MenuItem value="2">Шрифт 2</MenuItem>
      <MenuItem value="3">Шрифт 3</MenuItem>
    </Select>
  );
};

export default CustomSelector;
