import Button from "../../components/additional/button";
import Check from "../../components/additional/check";
import FormGroup from "../../components/forms/form-group";
import { IAddUser } from "../../interfaces/users.interface";
import { InitialInputData } from "./components/utils/init";
import Input from "../../components/forms/input";
import { createUser } from "../../apis/users.api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddUser = () => {
  const router = useNavigate();
  const [user, setUser] = useState<Omit<IAddUser, "id">>({
    username: " ",
    age: 0,
    address: " ",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSumit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const newUser: Omit<IAddUser, "id"> = {
        username: user.username,
        age: user.age,
        address: user.address,
      };
      await createUser(newUser);
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
        <h1 className="text-xl font-bold">Add New User</h1>
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
          <Button infor="Add User" />
        </form>
      </div>
    </div>
  );
};

export default AddUser;
