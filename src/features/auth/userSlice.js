import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

const initialState = {
    name: "",
    email: "",
    photo: ""
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },

        setLogoutState: (state) => {
            state.name = null;
            state.email = null;
            state.photo = null;
        }
    }
})


export const { setUserLoginDetails, setLogoutState } = userSlice.actions;
export const selectUserName = state.user.name;
export const selectUserEmail = state.user.email;
export const selectUserphoto = state.user.photo;