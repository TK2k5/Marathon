import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface IUsers {
  id: number;
  username: string;
  age: number;
  address: string;
}

const Users = () => {
  const router = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/user");
        const userlist = await response.json();
        setUser(userlist);
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error);
      }
    };
    fetchData();
  }, []);

  const userList: IUsers[] = [];
  const [user, setUser] = useState<IUsers[]>(userList);

  const handleClick = () => {
    router("/adduser");
  };

  const handleDelete = async (idUser: number) => {
    try {
      const response = await fetch(`http://localhost:3000/user/${idUser}`, {
        method: "DELETE",
      });
      const users = await response.json();
      console.log("🚀 ~ handleDelete ~ users:", users);
      const newUserList = user.filter((value) => value.id !== idUser);
      setUser(newUserList);
    } catch (error) {
      console.log("🚀 ~ handleDelete ~ error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4 items-center mb-4">
        <div className="font-mono font-bold text-2xl">User List</div>
        <button
          onClick={handleClick}
          className="rounded-md bg-blue-800 w-[100px] text-white font-mono font-bold hover:opacity-50"
        >
          Add User
        </button>
      </div>
      <div className="relative w-full p-3">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3 border border-black">UserName</th>
              <th className="px-6 py-3 border border-black">Age</th>
              <th className="px-6 py-3 border border-black ">Address</th>
              <th className="px-6 py-3 border border-black">Modify</th>
            </tr>
          </thead>
          <tbody>
            {user.map((data) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={data.id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {data.username}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {data.age}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {data.address}
                  </th>
                  <th className="flex gap-2">
                    <button
                      className="bg-red-500 text-white py-2 px-4 rounded-md mt-2"
                      onClick={() => handleDelete(data.id)}
                    >
                      Delete
                    </button>
                    <Link
                      to={`/edituser/${data.id}`}
                      className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2"
                    >
                      Edit
                    </Link>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
