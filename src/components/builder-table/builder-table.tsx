import BuilderTableHead from "@components/builder-table/builder-table-head";
import React from "react";
import BuilderTableFoot from "@components/builder-table/builder-table-foot";

export type BuilderTableProps = {
    rows: React.ReactNode,
    grandTotal: number
}

export default function BuilderTable ({rows, grandTotal}: BuilderTableProps) {
    return (
        <div className="w-full h-auto px-[12px] lg:px-0">
            <div className="w-full h-auto shadow-2xl text-[14px]">
                <BuilderTableHead />
                <div className="w-full h-auto pb-6 lg:pb-0 lg:border lg:border-gray-400 lg:divide-y lg:divide-gray-400">
                    {rows}
                </div>
                {
                    grandTotal !== 0 &&
                    <BuilderTableFoot grandTotal={grandTotal} />
                }
            </div>
        </div>
    );
}