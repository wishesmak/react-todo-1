import React, { useState, useRef } from "react";
import TodoItem from "./item/TodoItem";

import TodoForm from "./TodoForm";

const data = [];

const Home = () => {
  const [todos, setTodos] = useState(data);
  const [status, setStatus] = useState(0);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t._id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const removeTodo = (id) => {
    setTodos([...todos].filter((t) => t._id != id));
  };

  const todoTitleRef = useRef();
  const addTodo = () => {
    if (todoTitleRef.current.value !== "") {
      let lastId =
        todos.length != 0
          ? Object.keys(todos)[Object.keys(todos).length - 1] + 1
          : 0;
      const newTodo = {
        _id: lastId,
        title: todoTitleRef.current.value,
        status: status,
      };
      const copy = [...todos];
      copy.push(newTodo);
      setTodos(copy);
      todoTitleRef.current.value = "";
    } else {
      alert("Поле не должно быть пустым!");
    }
  };

  const onKeyPressHandler = (event) => {
    if (event.key == "Enter") {
      addTodo();
    }
  };

  return (
    <div className="bg-gray-900 h-screen py-10">
      <div className=" text-white w-3/5 mx-auto">
        <h1 className="text-2xl fon-bold text-center mb-8">Todo for junior</h1>
        <TodoForm
          addTodo={addTodo}
          onKeyPressHandler={onKeyPressHandler}
          todoTitleRef={todoTitleRef}
          setStatus={setStatus}
        />
        <button
          onClick={() =>
            setTodos(todos.sort((a, b) => (a.status > b.status ? 1 : -1)))
          }
        >
          Sort
        </button>
        <div>
          {todos.length != 0 ? (
            todos.map((todo) => (
              <TodoItem
                key={todo._id}
                todo={todo}
                changeTodo={changeTodo}
                removeTodo={removeTodo}
              />
            ))
          ) : (
            <h1 className="flex justify-center items-center font-bold text-lg">
              no todos
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
