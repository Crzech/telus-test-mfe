"use client";
import { useContext } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import { todoListContext } from "./todo-list.context";
import { Task } from "@mui/icons-material";

const TodoItems: React.FC = (key) => {
  const { items, toggleItem, filter } = useContext(todoListContext);
  const filteredItems =
    filter !== "all"
      ? items.filter((item) => {
          if (filter === "completed" && !item.active) {
            return true;
          } else if (filter === "active" && item.active) {
            return true;
          }
          return false;
        })
      : [...items];
  return filteredItems.map((item) => {
    const labelId = `checkbox-list-label-${item.id}`;
    return (
      <ListItem
        key={item.id}
        disablePadding
        secondaryAction={
          <ListItemIcon>
            <Checkbox
              edge="start"
              tabIndex={-1}
              disableRipple
              inputProps={{ "aria-labelledby": labelId }}
              checked={!item.active}
              onChange={(e) => {
                toggleItem(item.id);
              }}
            />
          </ListItemIcon>
        }
      >
        <ListItemButton role={undefined} dense>
          <IconButton aria-label="comment">
            <Task />
          </IconButton>
          <ListItemText id={labelId} primary={item.value} />
        </ListItemButton>
      </ListItem>
    );
  });
};
export default TodoItems;
