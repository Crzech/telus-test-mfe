"use client";
import React from "react";
import List from "@mui/material/List";
import TodoItems from "./todo-items.component";

const TodoList: React.FC = () => {
  return (
    <List sx={{ width: "100vw", maxWidth: 800, bgcolor: "background.paper" }}>
      <TodoItems />
    </List>
  );
};
export default TodoList;
