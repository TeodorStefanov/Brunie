import { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, update } from "../../redux/userSlice";
import "./loginPage.scss";
export const LoginPage: FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const user = useSelector((state: any) => state.user.name);
  const dispatch = useDispatch();
  const handleUpdate = (e: any) => {
    e.preventDefault();
    dispatch(
      update({
        name,
        email,
      })
    );
  };
  const handleRemove = (e: any) => {
    e.preventDefault();
    dispatch(remove());
  };
  console.log(user);
  return (
    <div className="container">
      <input onChange={(e) => setName(e.target.value)}></input>
      <input onChange={(e) => setEmail(e.target.value)}></input>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};
