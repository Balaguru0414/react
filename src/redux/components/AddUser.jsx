import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../slice/userSlice";

const AddUser = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ name: username, email: useremail }));
    setUsername("");
    setUseremail("");
  };

  return (
    <div>
      <center>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="Enter UserName"
            required
          />
          <input
            type="text"
            name="username"
            onChange={(e) => setUseremail(e.target.value)}
            value={useremail}
            placeholder="Enter Email"
            required
          />
          <button className="submit">SUBMIT</button>
        </form>
      </center>
    </div>
  );
};

export default AddUser;
