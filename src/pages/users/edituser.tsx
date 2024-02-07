import { IAddUser, IUsers } from "../../interfaces/users.interface";
import { getUserById, updateUser } from "../../apis/users.api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../../components/additional/button";
import Check from "../../components/additional/check";
import FormGroup from "../../components/forms/form-group";
import { InitialInputData } from "./components/utils/init";
import Input from "../../components/forms/input";
import { toast } from "react-toastify";

const EditUser = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const router = useNavigate();
  const [user, setUser] = useState<Omit<IAddUser, "id">>({
    username: " ",
    age: 0,
    address: " ",
  });

  const { id: idParams } = useParams();

  useEffect(() => {
    if (idParams) {
      const fetchData = async () => {
        try {
          const response = await getUserById(idParams);
          setUser(response.data);
        } catch (error) {
          console.log("🚀 ~ fetchData ~ error:", error);
        }
      };
      fetchData();
    }
  }, [idParams]);

  const handleOnSumit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const newUser: IUsers = {
        id: String(idParams),
        username: user.username,
        age: user.age,
        address: user.address,
      };
      const response = await updateUser(newUser);
      console.log("🚀 ~ handleOnSumit ~  response:", response);
      router("/users");
      toast.success("Success");
    } catch (error) {
      toast.error("Fail");
      console.log("🚀 ~ handleOnSumit ~ error:", error);
    }
  };

  const init = InitialInputData({ user });

  return (
    <div className="flex items-center">
      <div className="w-[500px] bg-white p-4 rounded-md flex flex-col gap-4">
        <h1 className="text-2xl	font-Inter font-bold">Edit User</h1>
        <form
          onSubmit={(event) => handleOnSumit(event)}
          className="flex flex-col gap-5 w-full"
        >
          {init.map((inputItem, index) => (
            <FormGroup Name={inputItem.Name} key={index}>
              <Input
                handleChange={(e) => handleChange(e)}
                name={inputItem.name}
                type={inputItem.type}
                value={inputItem.value}
              />
            </FormGroup>
          ))}

          <div>
            <Check />
          </div>
          <Button infor="Edit User" />
        </form>
      </div>
    </div>
  );
};

export default EditUser;
