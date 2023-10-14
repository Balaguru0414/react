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
