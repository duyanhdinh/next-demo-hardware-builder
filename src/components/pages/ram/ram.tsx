import SystemTable from "@components/system-table/system-table";
import React, {useEffect} from "react";
import {systemTableRows} from "@components/system-table/system-table-row";
import {useAppDispatch, useAppSelector} from "@store/hooks";
import {
    fetchRam, RamData, pickRam
} from "@store/features/hardware/ram/ramSlice";

export const ramInfo = ({info}: RamData) => {
    return (
        <>
            <div className="w-full flex flex-wrap">
                <div className="w-full lg:w-1/2"><span className="font-semibold">Brand:</span> {info.brand}</div>
                <div className="w-full lg:w-1/2 text-left lg:text-right"><span className="font-semibold">Model:</span> {info.model}</div>
                <div className="w-full lg:w-1/3"><span className="font-semibold">RAM Size:</span> {info.size} GB</div>
                <div className="w-full lg:w-1/3 text-left lg:text-center"><span className="font-semibold">Quantity:</span> {info.quantity}</div>
                <div className="w-full lg:w-1/3 text-left lg:text-right"><span className="font-semibold">RAM Type:</span> {info.type}</div>
                <div className="w-full lg:w-1/3"><span className="font-semibold">RAM Speed:</span> {info.size} MHz</div>
                <div className="w-full lg:w-1/3 text-left lg:text-center"><span className="font-semibold">DIMM Type:</span> {info.dimm}</div>
                <div className="w-full lg:w-1/3 text-left lg:text-right"><span className="font-semibold">CAS Latency:</span> {info.cas}</div>
            </div>
        </>
    );
};

export default function Ram () {
    const rams = useAppSelector((state) => state.rams.list);
    const pickedId = useAppSelector((state) => state.rams.value.id);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchRam());
    }, [dispatch]);

    return (
        <>
            <div className="w-full font-bold text-center text-[18px] mb-[12px]">Select your ram</div>
            <SystemTable rows={systemTableRows({
                data: rams,
                infoCallback: ramInfo,
                pickedId,
                changeCallback: (id) => dispatch(pickRam(id))
            })} />
        </>
    );
}