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
