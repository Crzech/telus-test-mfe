"use client";
import React, { useContext } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { todoListContext } from "./todo-list.context";

const FilterTodoItems: React.FC = () => {
  const { filter, setFilter } = useContext(todoListContext);
  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
  };
  return (
    <Select
      fullWidth
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={filter}
      label="Age"
      onChange={handleChange}
    >
      <MenuItem value={"all"}>All</MenuItem>
      <MenuItem value={"active"}>Active</MenuItem>
      <MenuItem value={"completed"}>Completed</MenuItem>
    </Select>
  );
};

export default FilterTodoItems;
