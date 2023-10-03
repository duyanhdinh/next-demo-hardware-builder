import SystemTable from "@components/system-table/system-table";
import React, {useEffect} from "react";
import {systemTableRows} from "@components/system-table/system-table-row";
import {useAppDispatch, useAppSelector} from "@store/hooks";
import {
    fetchMonitor, MonitorData, pickMonitor
} from "@store/features/hardware/monitor/monitorSlice";

export const monitorInfo = ({info}: MonitorData) => {
    return (
        <>
            <div className="w-full flex flex-wrap">
                <div className="w-full lg:w-1/2"><span className="font-semibold">Brand:</span> {info.brand}</div>
                <div className="w-full lg:w-1/2 text-left lg:text-right"><span className="font-semibold">Model:</span> {info.model}</div>
                <div className="w-full lg:w-1/3"><span className="font-semibold">Screen Size:</span> {info.screen_size + '"'}</div>
                <div className="w-full lg:w-1/3 text-left lg:text-center"><span className="font-semibold">Resolution:</span> {info.resolution}</div>
                <div className="w-full lg:w-1/3 text-left lg:text-right"><span className="font-semibold">Aspect Ratio:</span> {info.aspect_ratio}</div>
                <div className="w-full lg:w-1/3"><span className="font-semibold">Response Time:</span> {info.response_time_ms} ms</div>
                <div className="w-full lg:w-1/3 text-left lg:text-center"><span className="font-semibold">Panel Type:</span> {info.panel}</div>
                <div className="w-full lg:w-1/3 text-left lg:text-right"><span className="font-semibold">Refresh Rate:</span> {info.refresh_rate} Hz</div>
            </div>
        </>
    );
};

export default function Monitor () {
    const monitors = useAppSelector((state) => state.monitors.list);
    const pickedId = useAppSelector((state) => state.monitors.value.id);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchMonitor());
    }, [dispatch]);

    return (
        <>
            <div className="w-full font-bold text-center text-[18px] mb-[12px]">Select your monitor</div>
            <SystemTable rows={systemTableRows({
                data: monitors,
                infoCallback: monitorInfo,
                pickedId,
                changeCallback: (id) => dispatch(pickMonitor(id))
            })} />
        </>
    );
}