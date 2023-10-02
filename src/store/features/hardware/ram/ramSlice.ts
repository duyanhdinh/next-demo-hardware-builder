import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {HardwareCommonData} from "@store/features/hardware/common";
import {API_HARDWARE} from "@const/api";
import {HARDWARE_STORE} from "@const/localStorage";

export type RamInfoData = {
    brand: string,
    model: string,
    size: number,
    quantity: string,
    type: string,
    speed_mhz: number,
    dimm: string,
    cas: string,
}


export type RamData = HardwareCommonData & { info: RamInfoData };

type RamState = {
    value: RamData,
    list: RamData[]
}

const initialState = {
    value: {},
    list: [] as RamData[]
} as RamState;

export const fetchRam = createAsyncThunk(
    'motherboard/fetchList',
    async () => {
        const response = await fetch(API_HARDWARE.RAM);

        return (await response.json()) as RamData[]
    }
)


export const ramSlice = createSlice({
    name: 'ram',
    initialState,
    reducers: {
        pickRam: (state, action: PayloadAction<string>) => {
            state.value = state.list.find(item => item.id === action.payload)!
        },
        removeRam: (state) => {
            state.value = {} as RamData
        },
        storeLocalRam: (state) => {
            localStorage.setItem(HARDWARE_STORE.RAM, JSON.stringify(state.value))
        },
        getLocalRam: (state) => {
            if (localStorage.getItem(HARDWARE_STORE.RAM) !== null) {
                state.value = JSON.parse(localStorage.getItem(HARDWARE_STORE.RAM)!)
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchRam.fulfilled, (state, {payload}) => {
            state.list = payload
        })
    }
})

export const {pickRam, removeRam, storeLocalRam, getLocalRam} = ramSlice.actions

export default ramSlice.reducer