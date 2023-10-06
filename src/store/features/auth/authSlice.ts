import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type UserStore = {
    displayName: string | null,
    email: string | null
}

const initialState = {
    user: {} as UserStore,
    isAuth: false
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signInUser: (state, action: PayloadAction<UserStore>) => {
            const {displayName, email} = action.payload;
            state.user = {
                displayName: displayName ?? '',
                email: email ?? ''
            };
            state.isAuth = true;
        },
        signOutUser: (state) => {
            state.user = {} as UserStore;
            state.isAuth = false;
        }
    }
});

export const {signInUser, signOutUser} = authSlice.actions;

export default authSlice.reducer;