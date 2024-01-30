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
      const newUser: Omit<IAddUser, "id"> = {
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
        body: JSON.stringify(newUser),
      });
      await response.json();
      router("/users");
    } catch (error) {
      console.log("🚀 ~ handleOnSumit ~ error:", error);
    }
  };

  return (
    <div className="flex items-center">
      <div className="w-[500px] bg-white p-4 rounded-md flex flex-col gap-4">
        <h1 className="text-xl font-bold">Add New User</h1>
        <form
          onSubmit={(event) => handleOnSumit(event)}
          className="flex flex-col gap-5 w-full"
        >
          <h1 className="text-primarydark font-Inter font-medium">Username:</h1>
          <input
            value={user.name}
            className="outline-none border border-gray-200 rounded-lg p-3"
            type="text"
            onChange={(event) => handleNameChange(event)}
          />
          <h1 className="text-primarydark font-Inter font-medium">Age:</h1>
          <input
            value={user.age}
            className="outline-none border border-gray-200 rounded-lg p-3"
            type="number"
            onChange={(event) => handleAgeChange(event)}
          />
          <h1 className="text-primarydark font-Inter font-medium">Address:</h1>
          <input
            value={user.address}
            className="outline-none border border-gray-200 rounded-lg p-3"
            type="text"
            onChange={(event) => handleAddressChange(event)}
          />
          <div>
            <div>
              <h1 className="text-primarydark font-Inter font-medium">
                Status:
              </h1>
              <div className="flex gap-6 items-center">
                <label className="flex justify-center gap-2">
                  <input
                    type="radio"
                    className="accent-success w-6 h-6"
                    defaultChecked
                  />
                  Active
                </label>
                <label className="flex justify-center gap-2">
                  <input type="radio" className="accent-success w-6 h-6" />
                  Inactive
                </label>
              </div>
            </div>
          </div>
          <button className="text-white font-Inter font-bold bg-primary rounded-lg p-2 w-[200px] hover:opacity-50">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
