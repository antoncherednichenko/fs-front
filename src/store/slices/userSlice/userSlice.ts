import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "./types";

const initialState: IUserState = {
    accessToken: null,
    banReason: null,
    email: null,
    id: null,
    isBanned: false,
    role: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUserState: (state, action: PayloadAction<IUserState>) => {
            state = action.payload
        }
    }
})

export const { updateUserState } = userSlice.actions
export default userSlice.reducer