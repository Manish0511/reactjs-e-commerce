import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        register: (state, action) => {
            console.log(action.payload)
            let foundId = false
            state.map((user) => {
                console.log(action.payload)
                if(!foundId && user.email != action.payload.email){
                    foundId = true
                    console.log(foundId)
                }
            })
            if(!foundId) state.push(action.payload)
            return state
        }
    }
})
export const usersAction = usersSlice.actions

export default usersSlice