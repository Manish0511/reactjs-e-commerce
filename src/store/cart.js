import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart : (state, action) => {
            console.log(action.payload)
            let foundId = false
            state.map((item, key) => {
                if(item.id == action.payload.id){
                    console.log('update')
                    foundId = true
                    state[key] = action.payload
                }
            })
            if(!foundId) state.push(action.payload)
            return state
        },
        removeFromCart : (state, action) => {
            return state.filter((item) => item.id != action.payload)
        }
    }
})
export const cartActions = cartSlice.actions

export default cartSlice