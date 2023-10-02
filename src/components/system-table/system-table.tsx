import React from "react";
import SystemTableHead from "@components/system-table/system-table-head";

type SystemTableProps = {
    rows: React.ReactNode
}

export default function SystemTable({rows}: SystemTableProps) {
    return (
        <div className="w-full h-auto shadow-2xl text-[14px]">
            <SystemTableHead />
            <div className="w-full h-auto border border-gray-400 divide-y divide-gray-400">
                {rows}
            </div>
        </div>
    )
}