"use client";

import BuilderTable from "@components/builder-table/builder-table";
import React, {useEffect, useState} from "react";
import BuilderTableRow from "@components/builder-table/builder-table-row";
import {useAppDispatch, useAppSelector} from "@store/hooks";
import {motherboardInfo} from "@components/pages/motherboard/motherboard";
import {getLocalMotherboard, removeMotherboard} from "@store/features/hardware/motherboard/motherboardSlice";
import {ramInfo} from "@components/pages/ram/ram";
import {getLocalRam, removeRam} from "@store/features/hardware/ram/ramSlice";
import {getLocalMonitor, removeMonitor} from "@store/features/hardware/monitor/monitorSlice";
import {monitorInfo} from "@components/pages/monitor/monitor";

const MotherboardRow = (): React.ReactNode => {
    const data = useAppSelector((state) => state.motherboards.value);
    const dispatch = useAppDispatch();

    const info = typeof data.id === "undefined" ? <></> : motherboardInfo(data);

    return (
        <BuilderTableRow
            name="motherboard"
            href={'/motherboard'}
            data={data}
            info={info}
            removeHandle={() => dispatch(removeMotherboard())}
        />
    )
}

const RamRow = (): React.ReactNode => {
    const data = useAppSelector((state) => state.rams.value);
    const dispatch = useAppDispatch();

    const info = typeof data.id === "undefined" ? <></> : ramInfo(data);

    return (
        <BuilderTableRow
            name="RAM"
            href={'/ram'}
            data={data}
            info={info}
            removeHandle={() => dispatch(removeRam())}
        />
    )
}

const MonitorRow = (): React.ReactNode => {
    const data = useAppSelector((state) => state.monitors.value);
    const dispatch = useAppDispatch();

    const info = typeof data.id === "undefined" ? <></> : monitorInfo(data);

    return (
        <BuilderTableRow
            name="Monitor"
            href={'/monitor'}
            data={data}
            info={info}
            removeHandle={() => dispatch(removeMonitor())}
        />
    )
}
const BuilderTableRows = (): React.ReactNode => (
    <>
        <MotherboardRow />
        <RamRow />
        <MonitorRow />
    </>
)

export default function HomePage() {
    const rows = BuilderTableRows();
    const motherboard = useAppSelector((state) => state.motherboards.value);
    const ram = useAppSelector((state) => state.rams.value);
    const monitor = useAppSelector((state) => state.monitors.value);
    const dispatch = useAppDispatch();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal((motherboard.price ?? 0) + (ram.price ?? 0) + (monitor.price ?? 0))
    }, [motherboard, ram, monitor]);

    useEffect(() => {
        dispatch(getLocalMotherboard());
        dispatch(getLocalRam());
        dispatch(getLocalMonitor());
    }, [dispatch]);

    return (
        <>
            <div className="w-full font-bold text-center text-[18px] mb-[12px] uppercase">Build your Computer</div>
            <BuilderTable rows={rows} grandTotal={total}/>
        </>
    )
}