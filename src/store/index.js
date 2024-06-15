import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cart"
import usersSlice from "./users"
import loginSlice from "./login"
import itemsSlice from "./items"

const mainStore = configureStore({
    reducer: {
        items : itemsSlice.reducer,
        cart : cartSlice.reducer,
        users : usersSlice.reducer,
        login: loginSlice.reducer
    }
})

export default mainStore