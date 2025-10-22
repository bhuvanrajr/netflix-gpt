import { createSlice } from "@reduxjs/toolkit";

const UserDataSlice = createSlice({
    name: "UserData",
    initialState : null,
    reducers :{
        addUser : (state, action) => {
            return action.payload;
        },
        removeUser : (state) => {
            return null;
        }
    }
});

export const {addUser, removeUser} = UserDataSlice.actions;
export default UserDataSlice.reducer;
