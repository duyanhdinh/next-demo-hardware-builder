import motherboardReducer from "@store/features/hardware/motherboard/motherboardSlice";
import ramReducer from "@store/features/hardware/ram/ramSlice";
import monitorReducer from "@store/features/hardware/monitor/monitorSlice";
import authReducer from "@store/features/auth/authSlice";
import {AnyAction, combineReducers, configureStore, ThunkDispatch} from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import {saveBrowserMiddleware} from "@store/middleware/saveBrowserMiddleware";

const rootReducer = combineReducers({
    motherboards: motherboardReducer,
    rams: ramReducer,
    monitors: monitorReducer,
    auth: authReducer
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => [
            ...getDefaultMiddleware(),
            saveBrowserMiddleware.middleware
        ],
        preloadedState
    });
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;