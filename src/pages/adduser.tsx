import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface IAddUser {
  id: number;
  username: string;
  age: number;
  address: string;
}

const AddUser = () => {
  const router = useNavigate();
  const [user, setUser] = useState({
    name: " ",
    age: 0,
    address: " ",
  });

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      name: (user.name = event.target.value),
    });
  };
  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      age: (user.age = event.target.valueAsNumber),
    });
  };
  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      address: (user.address = event.target.value),
    });
  };

  const handleOnSumit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const newProduct: Omit<IAddUser, "id"> = {
        username: user.name,
        age: user.age,
        address: user.address,
      };
      const response = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(newProduct),
      });
      await response.json();
      router("/users");
    } catch (error) {
      console.log("🚀 ~ handleOnSumit ~ error:", error);
    }
  };

  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-[500px] bg-white p-4 rounded-md flex flex-col gap-4 items-center">
        <h1 className="text-xl font-bold">Add New User</h1>
        <form
          onSubmit={(event) => handleOnSumit(event)}
          className="flex flex-col gap-4 w-full"
        >
          <h1>Username:</h1>
          <input
            value={user.name}
            className="outline-none border border-gray-200 rounded-lg p-3"
            type="text"
            onChange={(event) => handleNameChange(event)}
          />
          <h1>Age:</h1>
          <input
            value={user.age}
            className="outline-none border border-gray-200 rounded-lg p-3"
            type="number"
            placeholder="Age"
            onChange={(event) => handleAgeChange(event)}
          />
          <h1>Address:</h1>
          <input
            value={user.address}
            className="outline-none border border-gray-200 rounded-lg p-3"
            type="text"
            onChange={(event) => handleAddressChange(event)}
          />
          <button className="text-white font-mono font-bold bg-red-600 rounded-xl p-2 w-[200px] m-auto hover:opacity-50">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
