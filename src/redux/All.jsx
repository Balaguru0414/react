// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// =============== store/store.jsx ===============

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// =============== slice/slice.jsx ===============

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  users: [{ id: 1, name: "Balaguru", email: "balag0414@gmail.com" }],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const user = {
        id: nanoid(),
        name: action.payload.name,
        email: action.payload.email,
      };
      state.users.push(user);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// =============== Redux.jsx ===============

import "./redux.css";
import { Provider } from "react-redux";
import { store } from "./store/store";

// components
import AddUser from "./components/AddUser";
import Users from "./components/Users";

const Redux = () => {
  return (
    <div>
      <Provider store={store}>
        <AddUser />
        <Users />
      </Provider>
    </div>
  );
};

export default Redux;

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// >>>>>>>>>>>>>> components >>>>>>>>>>>>>>

// =============== AddUser.jsx ===============

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

// =============== Users.jsx ===============

import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../slice/userSlice";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  console.log(users);
  return (
    <>
      <center>
        <h1 className="users">Users</h1>
        {/* <div>
          {users.map((user) => (
            <li key={user.id}>
              <h2>{user.name}</h2>
              <h2>{user.email}</h2>
              <button onClick={() => dispatch(deleteUser(user.id))}>
                Delete
              </button>
            </li>
          ))}
        </div> */}

        <table border={1}>
          <tbody>
            <tr>
              <th style={{ minWidth: "62px" }}>Name</th>
              <th style={{ minWidth: "164px" }}>Email</th>
              <th>Remove User</th>
            </tr>

            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="delete"
                    onClick={() => dispatch(deleteUser(user.id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </>
  );
};

export default Users;
