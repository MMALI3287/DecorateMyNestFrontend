import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authId: "",
  role: "",
};

const Slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.authId = action.payload;
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
