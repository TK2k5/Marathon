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
  const [nameUser, setNameUser] = useState<string>("");
  const [addressUser, setAddressUser] = useState<string>("");
  const [ageUser, setAgeUser] = useState<number>(0);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameUser(event.target.value);
  };
  const handleChangeAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddressUser(event.target.value);
  };
  const handleChangeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgeUser(event.target.valueAsNumber);
  };

  const handleOnSumit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const newProduct: Omit<IAddUser, "id"> = {
        username: nameUser,
        age: ageUser,
        address: addressUser,
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
            value={nameUser}
            className="outline-none border border-gray-200 rounded-lg p-3"
            type="text"
            onChange={(event) => handleChangeName(event)}
          />
          <h1>Age:</h1>
          <input
            value={ageUser}
            className="outline-none border border-gray-200 rounded-lg p-3"
            type="number"
            placeholder="Age"
            onChange={(event) => handleChangeAge(event)}
          />
          <h1>Address:</h1>
          <input
            value={addressUser}
            className="outline-none border border-gray-200 rounded-lg p-3"
            type="text"
            onChange={(event) => handleChangeAddress(event)}
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
