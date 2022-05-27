import React, { useState, useRef } from "react";
import TodoItem from "./item/TodoItem";

import { IoIosAdd } from "react-icons/io";

const data = [];

const Home = () => {
  const [todos, setTodos] = useState(data);

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
      const newTodo = { _id: lastId, title: todoTitleRef.current.value };
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
        <div className="flex mb-5 bg-gray-800 p-5 rounded-2xl">
          <button
            className={`border-2  text-pink-400 hover:text-gray-900 border-pink-400 w-7 h-7 rounded-xl mr-2 flex items-center justify-center hover:bg-pink-400 transition-colors ease-in-out`}
            onClick={addTodo}
          >
            <IoIosAdd size={24} />
          </button>
          <input
            onKeyDown={onKeyPressHandler}
            className="px-3 py-1 ml-1 bg-gray-600 focus:bg-gray-500 hover:bg-gray-500 transition-colors ease-in-out w-full rounded-lg"
            type="text"
            ref={todoTitleRef}
          />
        </div>
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
