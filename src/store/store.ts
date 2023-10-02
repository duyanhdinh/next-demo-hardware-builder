import { configureStore } from '@reduxjs/toolkit'
import motherboardReducer from "@store/features/hardware/motherboard/motherboardSlice"
import ramReducer from "@store/features/hardware/ram/ramSlice"
import monitorReducer from "@store/features/hardware/monitor/monitorSlice"
import {saveBrowserMiddleware} from "@store/middleware/saveBrowserMiddleware";

export const store = configureStore({
    reducer: {
        motherboards: motherboardReducer,
        rams: ramReducer,
        monitors: monitorReducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        saveBrowserMiddleware.middleware
    ]
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch