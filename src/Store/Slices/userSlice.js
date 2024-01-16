import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  role: "",
};

const Slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.email = action.payload.email;
    },
    deleteUser: (state, action) => {
      state.email = "logged out";
    },
    addRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { addUser, deleteUser, addRole } = Slice.actions;

export default Slice.reducer;
