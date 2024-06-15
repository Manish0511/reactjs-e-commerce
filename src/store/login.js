import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState : {},
    reducers: {
        login: (state, action) => {
            console.log(action.payload)
            return action.payload
        },
        logout: (state) => {
            return {}
        }
    }
})

export const loginActions = loginSlice.actions
export default loginSlice