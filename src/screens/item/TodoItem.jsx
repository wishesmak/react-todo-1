import React from "react";
import Check from "./Check";
import { BsTrash } from "react-icons/bs";

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div
      className={`${
        todo.isCompleted && "line-through"
      } flex items-center mb-4 bg-gray-800 rounded-2xl w-full justify-between`}
    >
      <button
        className="flex items-center w-full rounded-2xl p-5"
        onClick={() => changeTodo(todo._id)}
      >
        <Check isCompleted={todo.isCompleted} status={todo.status} />
        {todo.title}
      </button>
      <button
        className="text-gray-600 hover:text-red-400"
        onClick={() => removeTodo(todo._id)}
      >
        <BsTrash className="m-5    transition ease-in-out" />
      </button>
    </div>
  );
};

export default TodoItem;
