import axios from "axios";
import React, { useEffect, useState } from "react";

const Api = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => setUsers(res.data));
  }, []);

  // ============== Add User ==============
  const postUser = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name: name,
      })
      .then((res) => setUsers([...users, res.data]));
    setName("");
  };

  // ============== Update User ==============
  const updateUser = () => {
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${1}`, {
        name: name,
      })
      .then((res) => setUsers(res.data));
    setName("");
  };
  // ============== Delete User ==============
  const deleteUser = () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${1}`)
      .then((res) => setUsers(res.data));
  };

  if (!users.name) setUsers({ name: "No User" });
  return (
    <div>
      <h1>Axios Api</h1>
      {/* <ol>
        {users.map((user, i) => (
          <li key={i}>{user.name}</li>
        ))}
      </ol> */}
      <p>{users.name}</p>

      <input
        style={{ color: "black" }}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* <button onClick={postUser}>Post</button> */}
      <button onClick={updateUser}>Update</button>

      <button onClick={deleteUser}>Delete</button>
    </div>
  );
};

export default Api;

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

import axios from "axios";

const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default API;
import axios from "./axios";

// url
 axios.get(`/users`).then((res) => setUsers(res.data));
 axios.get(`/users/1`).then((res) => setUsers(res.data));
 axios.post(`/users`).then((res) => setUsers(res.data));
 axios.put(`/users/1`).then((res) => setUsers(res.data));
 axios.delete(`/users/1`).then((res) => setUsers(res.data));
