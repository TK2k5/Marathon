import React from "react";
import { useState } from "react";

export const TodoList = () => {
  const data = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      age: 23,
    },

    {
      id: 2,
      name: "Nguyễn Văn B",
      age: 23,
    },
  ];

  const [arrayData, setarrayData] = useState(data);

  const handleClick = (id) => {
    const newData = arrayData.filter((value) => {
      if (id !== value.id) {
        return id;
      }
    });
    setarrayData(newData);
  };

  const addUser = () => {
    arrayData;
    const newUser = {
      id: 3,
      name: "Nguyễn Văn C",
      age: 23,
    };
    const newArrayData = [...arrayData, newUser];
    setarrayData(newArrayData);
  };

  const handleUpdateArray = (id) => {
    const userInfor = arrayData.find((value, index) => value.id === id);
    userInfor.name = userInfor.name + " Update";

    const newData = arrayData.map((value, index) => {
      if (value.id === id) {
        return userInfor;
      }
      return value;
    });
    setarrayData(newData);
  };

  return (
    <div className="flex flex-col gap-4 w-[500px] bg-white px-5 py-8 rounded">
      <p className="text-4xl font-bold">Todo App</p>
      <div className="items-center flex">
        <input
          type="text"
          className="border-solid border-2 border-slate-600  px-2 py-2 w-full"
          placeholder="Add your new todo"
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
            <p className="grow">
              {value.name} - {value.age}
            </p>
            <div>
              <button
                onClick={() => handleClick(value.id)}
                className="bg-red-500 py-2 px-4 rounded text-white  "
              >
                Delete
              </button>

              <button
                onClick={() => handleUpdateArray(value.id)}
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
