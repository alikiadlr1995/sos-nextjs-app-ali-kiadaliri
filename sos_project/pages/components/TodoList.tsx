// components/TodoList.tsx
import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="grid grid-cols-3 p-4 gap-4 h-screen w-full ">
    <div className="border-2 border-sky-500 rounded-md flex justify-center">
      <div className="w-[400px] flex flex-col p-4 gap-4">
        <TextField label="add a new Task" className=" w-full"  value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task" />
        <Button
          variant="contained"
          className="w-16"
          onClick={addTodo}
        >
          add
        </Button>
        <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span onClick={() => toggleTodo(todo.id)} style={{ cursor: 'pointer' }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
    <div>02</div>
    <div>03</div>
  </div>


    // <div>
    //   <h1>Todo List</h1>
    //   <div>
    //     <input
    //       type="text"
    //       value={inputValue}
    //       onChange={(e) => setInputValue(e.target.value)}
    //       placeholder="Add a new task"
    //     />
    //     <button onClick={addTodo}>Add</button>
    //   </div>
    //   <ul>
    //     {todos.map(todo => (
    //       <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
    //         <span onClick={() => toggleTodo(todo.id)} style={{ cursor: 'pointer' }}>
    //           {todo.text}
    //         </span>
    //         <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default TodoList;
