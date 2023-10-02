import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {HardwareCommonData} from "@store/features/hardware/common";
import {API_HARDWARE} from "@const/api";
import {HARDWARE_STORE} from "@const/localStorage";

export type MonitorInfoData = {
    brand: string,
    model: string,
    screen_size: number,
    resolution: string,
    aspect_ratio: string,
    response_time_ms: number,
    panel: string,
    refresh_rate: number,
}


export type MonitorData = HardwareCommonData & { info: MonitorInfoData };

type MonitorState = {
    value: MonitorData,
    list: MonitorData[]
}

const initialState = {
    value: {},
    list: [] as MonitorData[]
} as MonitorState;

export const fetchMonitor = createAsyncThunk(
    'monitor/fetchList',
    async () => {
        const response = await fetch(API_HARDWARE.MONITOR);

        return (await response.json()) as MonitorData[]
    }
)


export const monitorSlice = createSlice({
    name: 'monitor',
    initialState,
    reducers: {
        pickMonitor: (state, action: PayloadAction<string>) => {
            state.value = state.list.find(item => item.id === action.payload)!
        },
        removeMonitor: (state) => {
            state.value = {} as MonitorData
        },
        storeLocalMonitor: (state) => {
            localStorage.setItem(HARDWARE_STORE.MONITOR, JSON.stringify(state.value))
        },
        getLocalMonitor: (state) => {
            if (localStorage.getItem(HARDWARE_STORE.MONITOR) !== null) {
                state.value = JSON.parse(localStorage.getItem(HARDWARE_STORE.MONITOR)!)
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchMonitor.fulfilled, (state, {payload}) => {
            state.list = payload
        })
    }
})

export const {pickMonitor, removeMonitor, storeLocalMonitor, getLocalMonitor} = monitorSlice.actions

export default monitorSlice.reducer