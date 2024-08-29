// components/TodoList.tsx
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import MainLayout from "../components/mainLayout";
import DeleteIcon from '@mui/icons-material/Delete';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <MainLayout>
      <div className="flex justify-center p-4 gap-4 h-screen w-full ">
        <div className="border-2 border-sky-500 rounded-md flex justify-center">
          <div className="w-[400px] flex flex-col p-4 gap-4">
            <TextField
              label="add a new Task"
              className=" w-full"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Add a new task"
            />
            <Button variant="contained" className="w-16" onClick={addTodo}>
              add
            </Button>
            <ul>
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    onClick={() => toggleTodo(todo.id)}
                    style={{ cursor: "pointer" }}
                  >
                    {todo.text}
                  </span>
                  <DeleteIcon onClick={() => deleteTodo(todo.id)}/>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TodoList;
