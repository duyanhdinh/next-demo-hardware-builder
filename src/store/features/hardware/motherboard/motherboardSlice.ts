import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {HardwareCommonData} from "@store/features/hardware/common";
import {API_HARDWARE} from "@const/api";
import {HARDWARE_STORE} from "@const/localStorage";

export type MotherboardInfoData = {
    brand: string,
    model: string,
    chipset: string,
    form_factor: string,
    socket_type: string,
    memory_slots: number,
    max_memory_gb: number
}


export type MotherboardData = HardwareCommonData & { info: MotherboardInfoData };

type MotherboardState = {
    value: MotherboardData,
    list: MotherboardData[]
}

const initialState = {
    value: {},
    list: [] as MotherboardData[]
} as MotherboardState;

export const fetchMotherboard = createAsyncThunk(
    'motherboard/fetchList',
    async () => {
        const response = await fetch(API_HARDWARE.MOTHERBOARD);

        return (await response.json()) as MotherboardData[]
    }
)

export const motherboardSlice = createSlice({
    name: 'motherboard',
    initialState,
    reducers: {
        pickMotherboard: (state, action: PayloadAction<string>) => {
            state.value = state.list.find(item => item.id === action.payload)!
        },
        removeMotherboard: (state) => {
            state.value = {} as MotherboardData
        },
        storeLocalMotherboard: (state) => {
            localStorage.setItem(HARDWARE_STORE.MOTHERBOARD, JSON.stringify(state.value))
        },
        getLocalMotherboard: (state) => {
            if (localStorage.getItem(HARDWARE_STORE.MOTHERBOARD) !== null) {
                state.value = JSON.parse(localStorage.getItem(HARDWARE_STORE.MOTHERBOARD)!)
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchMotherboard.fulfilled, (state, {payload}) => {
            state.list = payload
        })
    }
})

export const {pickMotherboard, removeMotherboard, storeLocalMotherboard, getLocalMotherboard} = motherboardSlice.actions

export default motherboardSlice.reducer