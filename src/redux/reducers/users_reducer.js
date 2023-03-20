import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    createUsers: (state) => {},

    updateUsers: (state) => {},

    deleteUsers: (state) => {},

    getUsers: (state) => {
      return state.users;
    },
  },
});

export const { createUsers, updateUsers, deleteUsers, getUsers } =
  usersSlice.actions;

export default usersSlice.reducer;
