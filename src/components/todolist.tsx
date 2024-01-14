import React from "react";
import { useState } from "react";

export const TodoList = () => {
  const [value, setvalue] = useState("");
  const [arrayData, setarrayData] = useState(["Hello", "Hi", "Bye"]);

  const handleClick = (id) => {
    const newData = arrayData.filter((value) => {
      if (id !== value) {
        return id;
      }
    });
    setarrayData(newData);
  };

  const handleChange = (event) => {
    console.log("🚀 ~ handleChange ~ event:", event);
    setvalue(event.target.value);
  };

  const addUser = () => {
    const newArrayData = [...arrayData, value];
    setarrayData(newArrayData);
  };

  const handleUpdateArray = (values) => {
    const userInfor = arrayData.find((value, index) => value === values);
    setvalue(userInfor);
  };

  return (
    <div className="flex flex-col gap-4 w-[500px] bg-white px-5 py-8 rounded">
      <p className="text-4xl font-bold">Todo App</p>
      <div className="items-center flex">
        <input
          type="text"
          className="border-solid border-2 border-slate-600  px-2 py-2 w-full"
          placeholder="Add your new todo"
          value={value}
          onChange={(event) => handleChange(event)}
        />
        <button
          onClick={() => addUser()}
          className=" bg-violet-400 size-11 ml-2 text-4xl px-2 text-white"
        >
          +
        </button>
      </div>
      {arrayData.map((value, index) => {
        return (
          <div
            key={index}
            className="flex items-center bg-slate-100 rounded px-3 py-1"
          >
            <p className="grow">{value}</p>
            <div>
              <button
                onClick={() => handleClick(value)}
                className="bg-red-500 py-2 px-4 rounded text-white  "
              >
                Delete
              </button>

              <button
                onClick={() => handleUpdateArray(value)}
                className="bg-red-500 py-2 px-4 rounded text-white ml-2 "
              >
                Sửa
              </button>
            </div>
          </div>
        );
      })}
      <div className="flex justify-center items-center">
        <p className="grow">You have 4 pending task</p>
        <button className="bg-violet-400 px-3 py-3 text-white">
          Clear All
        </button>
      </div>
    </div>
  );
};
