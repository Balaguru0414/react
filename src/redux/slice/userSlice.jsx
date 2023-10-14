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
