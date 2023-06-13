import { createSlice } from "@reduxjs/toolkit";
interface StateType {
  name?: string;
  email?: string;
}
export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "asdasdas",
    email: "",
  } as StateType,
  reducers: {   
    update: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },

    remove: (state) => (state = {}),
  },
});
export const { update, remove } = userSlice.actions;
export default userSlice.reducer;
