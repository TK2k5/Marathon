import { useEffect, useState } from "react";

interface IUsers {
  id: number;
  username: string;
  age: number;
  address: string;
}

const Users = () => {
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

  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-[500px] bg-white p-4">
        <div className="text-center text-lg bg-lime-400 mb-4 font-bold">
          <h1>Danh sách người dùng</h1>
        </div>
        {user.map((data) => {
          return (
            <div className="border border-emerald-500 mt-4" key={data.id}>
              <div>Tên: {data.username}</div>
              <div>Tuổi: {data.age}</div>
              <div>Địa chỉ: {data.address}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
