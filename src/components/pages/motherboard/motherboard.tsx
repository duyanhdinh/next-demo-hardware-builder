import SystemTable from "@components/system-table/system-table";
import React, {useEffect} from "react";
import {systemTableRows} from "@components/system-table/system-table-row";
import {useAppDispatch, useAppSelector} from "@store/hooks";
import {
    fetchMotherboard, MotherboardData, pickMotherboard
} from "@store/features/hardware/motherboard/motherboardSlice";

export const motherboardInfo = ({info}: MotherboardData) => {
    return (
        <>
            <div className="w-full flex justify-between">
                <div><span className="font-semibold">Brand:</span> {info.brand}</div>
                <div><span className="font-semibold">Model:</span> {info.model}</div>
            </div>
            <div className="w-full flex">
                <div className="w-1/3"><span className="font-semibold">Chipset:</span> {info.chipset}</div>
                <div className="w-1/3 text-center"><span className="font-semibold">Form Factor:</span> {info.form_factor}</div>
                <div className="w-1/3 text-right"><span className="font-semibold">Socket Type:</span> {info.socket_type}</div>
            </div>
            <div className="w-full flex justify-between">
                <div><span className="font-semibold">Memory Slots:</span> {info.memory_slots} Slots</div>
                <div><span className="font-semibold">Max Memory Support:</span> {info.max_memory_gb} GB</div>
            </div>
        </>
    )
}

export default function Motherboard() {
    const motherboards = useAppSelector((state) => state.motherboards.list);
    const pickedId = useAppSelector((state) => state.motherboards.value.id);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchMotherboard());
    }, [dispatch]);

    return (
        <>
            <div className="w-full font-bold text-center text-[18px] mb-[12px]">Select your motherboard</div>
            <SystemTable rows={systemTableRows({
                data: motherboards,
                infoCallback: motherboardInfo,
                pickedId,
                changeCallback: (id) => dispatch(pickMotherboard(id))
            })} />
        </>
    )
}