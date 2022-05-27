import React from "react";
import { IoIosAdd } from "react-icons/io";

const TodoForm = ({ addTodo, onKeyPressHandler, todoTitleRef, setStatus }) => {
  const colors = ["blue", "yellow", "red"];

  return (
    <div className="flex mb-5 bg-gray-800 p-5 rounded-2xl">
      <button
        className={`border-2  text-pink-400 hover:text-gray-900 border-pink-400 w-7 h-7 rounded-xl flex items-center justify-center hover:bg-pink-400 transition-colors ease-in-out`}
        onClick={addTodo}
      >
        <IoIosAdd size={24} />
      </button>
      <input
        onKeyDown={onKeyPressHandler}
        className="px-3 py-1 mx-3 bg-gray-600 focus:bg-gray-500 hover:bg-gray-500 transition-colors ease-in-out w-full rounded-lg"
        type="text"
        ref={todoTitleRef}
      />
      <div className="flex items-center">
        {colors.map((color, i) => (
          <div className="form-check" key={color}>
            <input
              className={`form-check-input appearance-none rounded-full h-4 w-4 border border-${color}-400 bg-${color}-300 checked:bg-${color}-600 checked:border-${color}-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer`}
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault10"
              onClick={() => setStatus(i)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoForm;
