"use client";
import React, { useEffect, useState } from "react";
import { Item, Props, TodoListContextType } from "./todo-list-types";

export const todoListContext = React.createContext<TodoListContextType>({
  items: [],
  addItems: () => {},
  toggleItem: () => {},
  filter: "all",
  setFilter: () => {},
  clearStorage: () => {},
});

const TodoListContext: React.FC<Props> = ({ children }) => {
  let storedValue: Item[] = [];
  if (typeof window !== "undefined") {
    storedValue = JSON.parse(window.localStorage.getItem("todo-list") || "[]");
  }
  const [items, setItems] = useState<Item[]>(storedValue);
  const [filter, setFilter] = useState<string>("all");
  const addItems = (item: string) => {
    const id = Math.random().toString(16).slice(2);
    setItems([...items, { id, active: true, value: item }]);
  };
  const toggleItem = (id: string) => {
    setItems([
      ...items.map((item) => ({
        ...item,
        active: item.id === id ? !item.active : item.active,
      })),
    ]);
  };
  const clearStorage = () => {
    setItems([]);
    localStorage.removeItem("todo-list");
  };

  useEffect(() => {
    if (items.length) {
      localStorage.setItem("todo-list", JSON.stringify(items));
    }
  }, [items]);
  return (
    <todoListContext.Provider
      value={{ items, addItems, toggleItem, filter, setFilter, clearStorage }}
    >
      {children}
    </todoListContext.Provider>
  );
};

export default TodoListContext;
