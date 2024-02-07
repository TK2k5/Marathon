import { deleteUser, getAllUsers } from "../../apis/users.api";
import { useEffect, useState } from "react";

import Header from "../../components/header/header";
import { IUsers } from "../../interfaces/users.interface";
import ModalDelete from "../../components/modals/modaldelete";
import TableTh from "../../components/table/table-th";
import UserLine from "./components/user-line";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [showModal, SetShowModal] = useState<boolean>(false);
  const router = useNavigate();

  const handleCloseModal = () => {
    SetShowModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllUsers();
        setUser(response.data);
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error);
      }
    };
    fetchData();
  }, []);

  const [user, setUser] = useState<IUsers[]>([]);

  const handleClick = () => {
    router("/adduser");
  };

  const handleDelete = async (idUser: number | string) => {
    try {
      await deleteUser(idUser);
      const newUserList = user.filter((value) => value.id !== idUser);
      console.log("🚀 ~ handleDelete ~ newUserList:", newUserList);
      setUser(newUserList);
      SetShowModal(false);
      toast.success("Success");
    } catch (error) {
      toast.error("Fail");
      console.log("🚀 ~ handleDelete ~ error:", error);
    }
  };

  return (
    <div className="mx-[20px] flex flex-col justify-center">
      <Header Add="Add User" Names="Users" handleClick={handleClick} />
      <div className="min-h-screen flex flex-col items-center">
        <div className="relative w-full">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <TableTh th1="Username" th2="Age" th3="Address" th4="Modify" />
            </thead>
            <tbody>
              {user &&
                user.length > 0 &&
                user.map((data) => {
                  return (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      key={data.id}
                    >
                      <UserLine
                        data={data}
                        SetShowModal={() => SetShowModal(true)}
                      />
                      <ModalDelete
                        visible={showModal}
                        onClose={handleCloseModal}
                        handleModalDelete={() => handleDelete(data.id)}
                        id={data.id}
                      />
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      ;
    </div>
  );
};

export default Users;
