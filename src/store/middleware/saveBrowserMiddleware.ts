import {createListenerMiddleware, isAnyOf} from "@reduxjs/toolkit";
import {
    pickMotherboard,
    removeMotherboard,
    storeLocalMotherboard
} from "@store/features/hardware/motherboard/motherboardSlice";
import {pickRam, removeRam, storeLocalRam} from "@store/features/hardware/ram/ramSlice";
import {pickMonitor, removeMonitor, storeLocalMonitor} from "@store/features/hardware/monitor/monitorSlice";

export const saveBrowserMiddleware = createListenerMiddleware();

saveBrowserMiddleware.startListening({
    matcher: isAnyOf(pickMotherboard, removeMotherboard),
    effect: async (_, listenerApi) => {
        listenerApi.dispatch(storeLocalMotherboard());
    }
});

saveBrowserMiddleware.startListening({
    matcher: isAnyOf(pickRam, removeRam),
    effect: async (_, listenerApi) => {
        listenerApi.dispatch(storeLocalRam());
    }
});

saveBrowserMiddleware.startListening({
    matcher: isAnyOf(pickMonitor, removeMonitor),
    effect: async (_, listenerApi) => {
        listenerApi.dispatch(storeLocalMonitor());
    }
});