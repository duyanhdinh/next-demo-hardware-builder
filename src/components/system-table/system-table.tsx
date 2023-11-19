import React from "react";
import SystemTableHead from "@components/system-table/system-table-head";
import SystemTableRowDefault from "@components/system-table/system-table-row-default";

export type SystemTableProps = {
    rows: React.ReactNode
}

export default function SystemTable ({rows}: SystemTableProps) {
    return (
        <div className="w-full h-auto shadow-2xl text-[14px]">
            <SystemTableHead />
            <div className="w-full h-auto pb-6 lg:pb-0  lg:border lg:border-gray-400 lg:divide-y lg:divide-gray-400">
                {
                    !(rows as React.ReactElement).props?.children?.length &&
                    <>
                    	<SystemTableRowDefault />
                    	<SystemTableRowDefault />
                    	<SystemTableRowDefault />
                    </>
                }
                {rows}
            </div>
        </div>
    );
}