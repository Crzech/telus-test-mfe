"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useContext } from "react";
import { todoListContext } from "./todo-list.context";

const AddTodo: React.FC = () => {
  const { addItems, clearStorage } = useContext(todoListContext);
  const [newItem, setNewItem] = useState<string>("");
  const handleButtonClick = () => {
    if (newItem && newItem.length) {
      addItems(newItem);
    }
    setNewItem("");
  };
  return (
    <Container style={{ textAlign: "center" }}>
      <TextField
        style={{ width: "70%" }}
        placeholder="Add todo"
        onChange={(e) => {
          setNewItem(e.target.value);
        }}
        value={newItem}
      />
      <Button
        onClick={handleButtonClick}
        style={{ height: "55px" }}
        variant="contained"
      >
        Add
      </Button>
      <Button
        onClick={() => clearStorage()}
        style={{ height: "55px" }}
        variant="contained"
      >
        Clear List
      </Button>
    </Container>
  );
};

export default AddTodo;
